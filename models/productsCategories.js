const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
  const productsCategories = sequelize.define(
    "productsCategories",
    {
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
    },
    {
      timestamps: false,
    }
  )
  return productsCategories
}
