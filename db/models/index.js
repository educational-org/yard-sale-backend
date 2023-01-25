const  { UserSchema, User } = require('./user.model');
const  { CustomerSchema, Customer } = require('./customer.model');
const  { CategorySchema, Category } = require('./category.model');
const  { ProductSchema, Product } = require('./product.model');
const { Order, OrderSchema } = require('./order.model');
const { OrderProduct, OrderProductSchema } = require('./order-product.model');

function setupModels(sequelize){
  User.init(UserSchema, User.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Order.init(OrderSchema, Order.config(sequelize));
  OrderProduct.init(OrderProductSchema, OrderProduct.config(sequelize));

  Customer.associate(sequelize.models); //llamos nuestro metodo para la asociación
  User.associate(sequelize.models); //llamos nuestro metodo para la asociación
  Category.associate(sequelize.models);
  Product.associate(sequelize.models);
  Order.associate(sequelize.models);
}

module.exports = setupModels;
