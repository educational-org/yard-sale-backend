const express = require('express'); // Importing the express module
const ProductsService = require('.././services/product.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createProductSchema, updateProductSchema, getProductSchema } = require('../schemas/product.schema');


const service = new ProductsService();
const router = express.Router();

router.get('/',async (req, res) => {
  const products = await service.find();
  res.json(products);
});

router.get('/:id',
  validatorHandler(getProductSchema,"params"),
  async (req, res, next) => {
    try{  const { id } = req.params; //destructuring params to take only id.
      const product = await service.findOne(id);
      res.json(product)
    }catch(err){
      next(err)
    }
  }
);

router.post('/',
  validatorHandler(createProductSchema,"body"),
  async (req, res)=>{
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct)
  }
);

router.patch('/:id',
  validatorHandler(getProductSchema,"params"),
  validatorHandler(updateProductSchema,"body"),
  async (req, res , next)=>{
    try{
      const { id } = req.params;
      const changes = req.body;
      const product = await service.update(id,changes);
      res.json(product)
    }catch (err){
      next(err)
    }

  }
);

router.delete('/:id',async (req, res)=>{
  const { id } = req.params;
  const response = await service.delete(id);
  res.json(response)
})


module.exports = router;
