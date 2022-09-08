const express = require("express")
const { Op } = require("sequelize")
const { orderProductsExists } = require("../middlewares/ordersMW")
const app = express()
const { Order, Product } = require("../models")

app.post("/", orderProductsExists, async (req, res) => {
  try {
    const order = await Order.create(req.body)
    const products = await Product.findAll({
      where: {
        id: { [Op.in]: req.body.productsIds },
      },
    })
    order.setProducts(products)
    await order.save()
    res.json(order)
  } catch (e) {
    res.status(500).json("Internal server error")
    console.log(e)
  }
})

app.get("/", async (req, res) => {
  try {
    const orders = await Order.findAll({ include: Product })
    res.json(orders)
  } catch (e) {
    res.status(500).json("Internal server error")
  }
})

module.exports = app
