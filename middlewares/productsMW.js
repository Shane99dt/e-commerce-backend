const { Product } = require("../models");

const productExists = (req, res, next) => {
  const { id } = req.params;
  try {
    const product = Product.findOne({ where: { id } });
    if (product) {
      req.product = product;
      next();
    }
  } catch (e) {
    res.status(500).json("Internal server error");
  }
};

module.exports = { productExists };
