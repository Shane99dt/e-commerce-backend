const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
  const Product = sequelize.define("Product", {
    productName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    productOwner: {
      type: DataTypes.STRING
    },
    productImage: {
      type: DataTypes.TEXT
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