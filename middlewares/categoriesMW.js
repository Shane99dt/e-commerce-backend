const { Category } = require("../models")

const categoryExists = (req, res, next) => {
  const { id } = req.params
  try {
    const category = Category.findOne({ where: { id } })
    if (category) {
      req.category = category
      next()
    }
  } catch (e) {
    res.status(500).json("Internal server error")
  }
}

module.exports = { categoryExists }
