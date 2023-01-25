const faker = require('faker');
const boom = require('@hapi/boom');
const { Op } = require('sequelize');

const { models } = require('../libs/sequelize');

class ProductsService {
  constructor() {
    this.products = [];
    this.generate();
  }

  async generate() {
    const limit = 100;

    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }

  async create(data) {
    const newProduct = await models.Product.create(data);
    return newProduct;
  }

  async find(query) {

    const options = { //opciones por defecto
      include:['category'],
      where:{}
    }

    //QUERIES
    const { limit, offset, price, price_min, price_max } = query;

    if(limit && offset){ //agrega limit y offset, si vienen
      options.limit = limit;
      options.offset = offset;
    }
    if(price){
      options.where.price = price;
    }
    if( price_min && price_max){
      options.where.price = {
        [Op.gte]:price_min,
        [Op.lte]:price_max
      }
    }

    const products = await models.Product.findAll(options);
    return products;
  }

  async findOne(id) {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw boom.notFound('Product not found'); //mandamos el error
    }
    if(product.isBlock){
      throw boom.conflict('Product is block'); //mandamos el error
    }
    return product;
  }

  async update(id, changes) {
    const index = this.products.findIndex((item) => item.id == id);
    if (index === -1) {
      throw boom.notFound('Product not found'); //mandamos el error
    }
    const product = this.products[index];
    this.products[index] = {
      //nos quedamos con los datos que hayan en el producto y actualizamos los cambios
      ...product,
      ...changes,
    };
    return this.products[index];
  }

  async delete(id) {
    const index = this.products.findIndex((item) => item.id == id);
    if (index === -1) {
      throw boom.notFound('Product not found'); //mandamos el error
    }
    this.products.splice(index, 1); //elimina un elemento a partir de la posición index
    return { id };
  }
}
module.exports = ProductsService;
