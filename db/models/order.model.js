const { Model, DataTypes, Sequelize } = require('sequelize');
const { CUSTOMER_TABLE } = require('./customer.model')


const ORDERS_TABLE = 'orders';

const OrderSchema = {
  id: {
    allowNull:false,
    autoIncrement:true,
    primaryKey:true,
    type:DataTypes.INTEGER
  },
  customerId: { //relación con la tabla de customers
    field: 'customer_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CUSTOMER_TABLE,
      key: 'id'
    },
  },
  createdAt:{
    allowNull:false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  },
  updatedAt:{
    allowNull:false,
    type: DataTypes.DATE,
    field: 'updated_at',
    defaultValue: Sequelize.NOW
  },
  total:{
    type: DataTypes.VIRTUAL,
    get(){
      if(this.items.length > 0){
        return this.items.reduce((total,item)=>{
          return total + (item.price * item.OrderProduct.amount); //total que es el acomulativo, más el precio por la cantidad.
        },0);
      }
      return 0;
    }
  }
}

class Order extends Model {

  static associate(models) {
    this.belongsTo(models.Customer,{ //una orden puede ser usada por muchos customers
      as:'customer',
    });
    this.belongsToMany(models.Product, { //RELACIÓN MUCHOS A MUCHOS
      as: 'items',
      through: models.OrderProduct,
      foreignKey:'orderId',
      otherKey:'productId'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ORDERS_TABLE,
      modelName: 'Order',
      timestamps: false
    }
  }
}

module.exports = {OrderSchema, Order, ORDERS_TABLE};
