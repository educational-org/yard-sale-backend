const Boom = require('@hapi/boom');
const {models}= require('../libs/sequelize');
const bcrypt = require('bcrypt');

class UserService {
  constructor() {
  }

  async create(data) {
    const hash = await bcrypt.hash(data.password,10);
    const newUser = await models.User.create({
      ...data,
      password:hash
    });
    delete newUser.dataValues.password;
    return newUser;
  }

  async find() {
    const response = await models.User.findAll({
      include: ['customer']
    }); //Traiga todo lo de la tabla del modelo User
    return response;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id); //filstramos en la base datos el usuario por id
    if(!user){throw Boom.notFound('User not found')}; //validación si no existe
    return user;
  }

  async update(id, changes) {
    const user = await this.findOne(id) //filstramos en la base datos el usuario por id
    const response = await user.update(changes);  //realizamos el cambio con los datos nuevos.
    return response;
  }

  async delete(id) {
    const user = await this.findOne(id);
    const response = await user.destroy();
    return response;
  }
}
module.exports = UserService;
