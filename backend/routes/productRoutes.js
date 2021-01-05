import express from 'express';
const router = express.Router();
import Product from '../models/productModel.js';

router.get('/', (req, res) => {
  const products = Product.find({});
  res.json(products);
});

router.get('/:id', (req, res) => {
  const product = Product.find((p) => p._id === req.params.id);
  res.json(product);
});

export default router;
