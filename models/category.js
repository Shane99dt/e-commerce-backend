const { DATE } = require("sequelize")
const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
  const Category = sequelize.define("Category", {
    categoryName: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
  })
  return Category
}
