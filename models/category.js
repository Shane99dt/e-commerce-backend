const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
  const Category = sequelize.define("Category", {
    categoryName: {
      type: DataTypes.STRING
    }
  })
  return Category
}