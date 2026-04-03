const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/Product');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');

app.post('/product', async (req,res)=>{
  const product = await Product.create(req.body);
  res.json(product);
});

app.get('/products', async (req,res)=>{
  const products = await Product.find();
  res.json(products);
});

// aggregation: average rating
app.get('/avg-rating/:id', async (req,res)=>{
  const result = await Product.aggregate([
    { $match: { _id: new mongoose.Types.ObjectId(req.params.id) } },
    { $project: { name: 1, avgRating: { $avg: "$reviews.rating" } } }
  ]);
  res.json(result);
});

// stock update
app.patch('/stock/:sku', async (req,res)=>{
  const { stock } = req.body;

  const product = await Product.findOneAndUpdate(
    { "variants.sku": req.params.sku },
    { $set: { "variants.$.stock": stock } },
    { new: true }
  );

  res.json(product);
});

app.listen(3000, ()=> console.log("Running on 3000"));
