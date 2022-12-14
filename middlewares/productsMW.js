const { Product, Category } = require("../models")

const productExists = async (req, res, next) => {
  const { id } = req.params
  try {
    const product = await Product.findOne({
      where: { id },
      include: [Category],
    })
    if (product) {
      req.product = product
      next()
    }
  } catch (e) {
    res.status(500).json("Internal server error")
  }
}

module.exports = { productExists }
