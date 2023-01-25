const { models } = require('./../libs/sequelize');


class OrderService {

  constructor(){
  }
  async create(data) {
    const newOrder = await models.Order.create(data);
    return newOrder;
  }

  async addItem(data) {
    const newItem = await models.OrderProduct.create(data);
    return newItem;
  }

  async find(){
    const orders = await models.Order.findAll();
    return orders;
  }

  async findOne(id) {
    const order = await models.Order.findByPk(id,{
      include:[
        {
        association:'customer',
        include:['user']
        },
        "items"
      ] //para mostrar los productos relacionados
    });
    return order;
  }

  async update(id, changes) {
    const order = await this.findOne(id) //filstramos en la base datos el usuario por id
    const response = await order.update(changes);  //realizamos el cambio con los datos nuevos.
    return response;
  }

  async delete(id) {
    const order = await this.findOne(id);
    const response = await order.destroy();
    return response;
  }

}

module.exports = OrderService;
