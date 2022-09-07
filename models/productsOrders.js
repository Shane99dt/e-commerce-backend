const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
  const productsOrders = sequelize.define(
    "productsOrders",
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
  return productsOrders
}
