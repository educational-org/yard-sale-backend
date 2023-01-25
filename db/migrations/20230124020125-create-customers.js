'use strict';

const { CUSTOMER_TABLE , CustomerSchema } = require('./../models/customer.model'); //importamos nuestros datos del modelo de usuarios

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CUSTOMER_TABLE, CustomerSchema) //indicamos qué tabla y con qué schema la va a crear
  },

  async down (queryInterface) {
    await queryInterface.dropTable(CUSTOMER_TABLE); // para revertir lo que se hace en el up
  }
};
