const express = require("express");
const { productExists } = require("../middlewares/productsMW");
const app = express();
const { Product } = require("../models");

// get all products
app.get("/", async (req, res) => {
  try {
    let priceOrder = req.query.price;
    let order = {};

    if (priceOrder) {
      order = {
        order: [["price", priceOrder]],
      };
    }
    const products = Product.findAll(order);
    res.status(201).json(products);
  } catch (e) {
    res.status(500).json("Internal sever error");
  }
});

// get a product
app.get("/:id", productExists, async (req, res) => {
  res.status(201).json(req.product);
});

module.exports = app;
