const express = require('express'); // Importing the express module
const ProductsService = require('.././services/product.service');
const service = new ProductsService();
const router = express.Router();

router.get('/', (req, res) => {
  const products = service.find();
  res.json(products);
});

router.get('/:id', (req, res) => {
  const { id } = req.params; //destructuring params to take only id.
  const product = service.findOne(id);
  res.json(product)
});

router.post('/',(req, res)=>{
  const body = req.body;
  res.status(201).json({
    message: 'created',
    data:body
  })
})

router.patch('/:id',(req, res)=>{
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'updated',
    data:body,
    id
  })
})

router.delete('/:id',(req, res)=>{
  const { id } = req.params;
  res.json({
    message: 'deleted',
    id
  })
})


module.exports = router;
