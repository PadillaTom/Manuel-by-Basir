import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Product from '../Models/productModels.js';
// Data:
import data from '../data.js';

const productRouter = express.Router();

// API to send to frontend:
productRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.send(products);
  })
);

// Setting up the DB:
productRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
    // await Product.remove({});
    const createdProducts = await Product.insertMany(data.products);
    res.send({ createdProducts });
  })
);

// For SINGLE PRODUCT using Params ID (en vez de /seed);
productRouter.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  })
);
export default productRouter;
