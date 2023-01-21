const express = require('express');
const router = express.Router();

router.get('/categories/:categoryId/products/:productId', (req, res) => {
  //getting multiple params
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
    price: 200,
  });
});

module.exports = router;
