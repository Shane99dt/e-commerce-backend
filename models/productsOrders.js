const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
  const ProductsOrders = sequelize.define("productsOrders", {
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
  })
  return ProductsOrders
}
