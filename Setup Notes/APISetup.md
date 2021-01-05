### Setup basic routes

1. In the routes/productRoutes.js folder

```javascript
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
      // we can use this because we setup a custom error handler
      throw new Error('Product not found');
    }
  })
);

export default router;
```

### Setup custom error handling middleware

1. In the middleware/errorMiddle.js file

```javascript
const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

export { notFound, errorHandler };
```
