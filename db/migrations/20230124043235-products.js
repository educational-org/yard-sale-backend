'use strict';

const { CATEGORY_TABLE , CategorySchema } = require('./../models/category.model'); //importamos nuestros datos del modelo de usuarios
const { PRODUCT_TABLE , ProductSchema } = require('./../models/product.model'); //importamos nuestros datos del modelo de usuarios

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema) //indicamos qué tabla y con qué schema la va a crear
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema) //indicamos qué tabla y con qué schema la va a crear
  },

  async down (queryInterface) {
    await queryInterface.dropTable(CATEGORY_TABLE); // para revertir lo que se hace en el up
    await queryInterface.dropTable(PRODUCT_TABLE); // para revertir lo que se hace en el up
  }
};
