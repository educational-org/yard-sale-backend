const boom = require('@hapi/boom');

function validatorHandler(schema, property) {
  return (req, res, next)=>{
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly:false}); //En  caso de haber más errores, los envía todos.
    if(error){
      next(boom.badRequest(error))//en caso de error, arrojar BadRequest
    }
    next(); //Si no hay error, que continué con el siguiente middleware
  }
}

module.exports = validatorHandler;
