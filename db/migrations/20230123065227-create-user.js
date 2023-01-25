'use strict';

const { USER_TABLE , UserSchema } = require('./../models/user.models'); //importamos nuestros datos del modelo de usuarios

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(USER_TABLE, UserSchema) //indicamos qué tabla y con qué schema la va a crear
  },

  async down (queryInterface) {
    await queryInterface.dropTable(USER_TABLE); // para revertir lo que se hace en el up
  }
};
