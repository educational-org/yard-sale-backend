const express = require('express');
const productsRouter = require('./products.router'); //importing products routes
const usersRouter = require('./users.router'); //importing products routes
const customersRouter = require('./customers.router'); //importing products routes
const categoriesRouter = require('./categories.router'); //importing products routes
const ordersRouter = require('./orders.router');

function routerApi(app){
  const router = express.Router();
  app.use('/api/v1', router)
  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
  router.use('/customers', customersRouter);
  router.use('/categories', categoriesRouter);
  router.use('/orders', ordersRouter);
}

module.exports = routerApi;
