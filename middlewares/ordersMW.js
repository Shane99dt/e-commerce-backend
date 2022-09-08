const orderProductsExists = async (req, res, next) => {
  if (req.body.productsIds) {
    next()
  } else {
    res.status(400).json("No products in your cart")
  }
}

module.exports = { orderProductsExists }
