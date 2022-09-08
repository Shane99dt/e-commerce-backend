const { Category, Product } = require("../models")

const categoryExists = async (req, res, next) => {
  const { id } = req.params
  try {
    let priceOrder = req.query.price
    const category = await Category.findOne({
      where: { id },
      include: [Product],
      order: [[{ model: Product }, "price", priceOrder]],
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
