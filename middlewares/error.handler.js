const { ValidationError } = require("sequelize"); //instanacia para detectar errores con tipo ValidationError

function logErrors(err, req, res, next) {
  console.error('log Errors');
  console.error(err);
  next(err);
}

function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    //Si el error es de tipo boom
    const { output } = err; //boom tiene la información en un output
    res.status(output.statusCode).json(output.payload); //leemos el estatus code y en el payload está la info
  }
  next(err);
}

function ormErrorHandler(err,req,res,next){
  if(err instanceof ValidationError){ //si error viene de sequelize
    res.status(409).json({
      statusCode:409,
      message: err.name,
      errors:err.errors
    })
  }
  next(err)
}

function errorHandler(err, req, res, next) {
  console.log('error Handler');
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}


module.exports = {
  logErrors,
  errorHandler,
  boomErrorHandler,
  ormErrorHandler
};
