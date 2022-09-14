import express from 'express';
import Product from '../models/productModel.js';
const productRouter = express.Router();

productRouter.get('/', async (req, res) => {
  const products = await Product.find();
  res.send(products);
})

productRouter.get('/slug/:slug', async (req, res) => {
  const prod = await Product.findOne({ slug: req.params.slug });
  if (prod) {
    res.send(prod);
  } else {
    res.status(404).send({ message: 'Product Not Found' })
  }
});

productRouter.get('/:id', async (req, res) => {
  const prod = await Product.findById(req.params.id);
  if (prod) {
    res.send(prod);
  } else {
    res.status(404).send({ message: 'Product Not Found' })
  }
});

export default productRouter;
