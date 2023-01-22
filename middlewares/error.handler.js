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
};
