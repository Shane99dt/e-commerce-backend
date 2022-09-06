const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
  const Product = sequelize.define("Product", {
    productName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT
    },
    price: {
      type: DataTypes.INTEGER
    }
  })
  return Product
}