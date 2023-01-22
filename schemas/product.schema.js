//datatransfer object, dtos
const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().alphanum().min(3).max(15);
const price = Joi.number().integer().min(10);
const imagen = Joi.string().uri() ;

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  imagen: imagen.required()
});

const updateProductSchema = Joi.object({
  name : name,
  price: price,
  imagen: imagen
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
};
