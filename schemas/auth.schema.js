const Joi = require('joi');

const password = Joi.string().min(8);
const token = Joi.string();

const recoveryPassSchema = Joi.object({
  token: token.required(),
  newPassword: password.required()

})

module.exports = {recoveryPassSchema }
