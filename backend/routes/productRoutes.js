import express from 'express';
import asyncHandler from 'express-async-handler';
const router = express.Router();

import Product from '../models/productModel.js';

// desc@    Fetch all products
// @route   GET /api/products
// @access  Public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    // using an empty object will give us all products
    const products = await Product.find({});

    res.json(products);
  })
);

// desc@    Fetch single product
// @route   GET /api/products/:id
// @access  Public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    // find a product by id
    const product = await Product.findById(req.params.id);

    // check if the product exists
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error('Product not found');
    }
  })
);

export default router;
