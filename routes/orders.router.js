const express = require('express'); // Importing the express module
const OrderService = require('.././services/order.service');
const validatorHandler = require('../middlewares/validator.handler');
const { getOrderSchema, createOrderSchema, addItemSchema } = require('../schemas/order.schema');
const service = new OrderService();
const router = express.Router();

router.get('/',async (req, res) => {
  const products = await service.find();
  res.json(products);
});

router.get('/:id',
  validatorHandler(getOrderSchema,"params"),
  async (req, res, next) => {
    try{  const { id } = req.params; //destructuring params to take only id.
      const order = await service.findOne(id);
      res.json(order)
    }catch(err){
      next(err)
    }
  }
);

router.post('/',
  validatorHandler(createOrderSchema,"body"),
  async (req, res)=>{
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct)
  }
);

router.post('/add-item',
  validatorHandler(addItemSchema,"body"),
  async (req, res)=>{
    const body = req.body;
    const newItem = await service.addItem(body);
    res.status(201).json(newItem)
  }
);

router.delete('/:id',async (req, res)=>{
  const { id } = req.params;
  const response = await service.delete(id);
  res.json(response)
})


module.exports = router;
