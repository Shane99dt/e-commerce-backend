require("dotenv").config()
const express = require("express")
const app = express()
const { PORT } = process.env
const productRoutes = require("./routes/products")
const categoryRoutes = require("./routes/category")
const ordersRoutes = require("./routes/orders")

require("./models/index")

app.use("/products", productRoutes)
app.use("/category", categoryRoutes)
app.use("/orders", ordersRoutes)

app.listen(PORT, (req, res) => {
  console.log(`Running on ${PORT}`)
})
