const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
  const Order = sequelize.define("Order", {
    total: {
      type: DataTypes.INTEGER,
    },
    customerName: {
      type: DataTypes.STRING,
      defaultValue: "benoit",
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
  return Order
}
