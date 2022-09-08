const { Category, Product } = require("../models")

const categoryExists = async (req, res, next) => {
  const { id } = req.params
  try {
    let priceOrder = req.query.price
    let orderProducts = [[{ model: Product }, "price", "ASC"]]
    if (priceOrder) {
      orderProducts = [[{ model: Product }, "price", priceOrder]]
    }

    const category = await Category.findOne({
      where: { id },
      include: [Product],
      order: orderProducts,
    })
    if (category) {
      req.category = category
      next()
    }
  } catch (e) {
    res.status(500).json("Internal server error")
  }
}

module.exports = { categoryExists }
