'use strict';

const { USER_TABLE , UserSchema } = require('./../models/user.models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(USER_TABLE, "role", UserSchema.role); //crea una columna
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(USER_TABLE, "role");
  }
};
