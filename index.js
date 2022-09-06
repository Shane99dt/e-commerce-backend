require("dotenv").config()
const express = require("express")
const app = express()
const { PORT } = process.env
const productRoutes = require("./routes/product")
const categoryRoutes = require("./routes/category")

require("./models/index")

app.use("/products", productRoutes)
app.use("/category", categoryRoutes)

app.listen(PORT, (req, res) => {
  console.log(`Running on ${PORT}`)
})
