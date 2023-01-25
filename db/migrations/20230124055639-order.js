'use strict';

const { OrderSchema, ORDERS_TABLE} = require('./../models/order.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable( ORDERS_TABLE, OrderSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(ORDERS_TABLE);
  }
};
