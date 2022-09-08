const { Sequelize } = require("sequelize")
const { DB_DATABASE, DB_HOST, DB_USERNAME, DB_PASSWORD } = process.env

const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mysql",
  logging: false,
})

const connectDb = async () => {
  try {
    await sequelize.authenticate()
    console.log("Connected to the DB")
  } catch (e) {
    console.log(e)
  }
}

connectDb()

const Product = require("./product")(sequelize)
const Order = require("./order")(sequelize)
const Category = require("./category")(sequelize)
const ProductsOrders = require("./productsOrders")(sequelize)

Product.belongsToMany(Order, {
  through: "products_orders",
})
Order.belongsToMany(Product, {
  through: "products_orders",
})
// Product.belongsToMany(Order, {
//   through: ProductsOrders,
// })
// Order.belongsToMany(Product, {
//   through: ProductsOrders,
// })
Category.belongsToMany(Product, {
  through: "products_categories",
})
Product.belongsToMany(Category, {
  through: "products_categories",
})

sequelize.sync({ alter: true })

const db = {
  sequelize,
  Product,
  Order,
  Category,
}

module.exports = db
