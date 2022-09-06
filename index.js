require("dotenv").config();
const express = require("express");
const app = express();
const { PORT } = process.env;
const productRoutes = require("./routes/products");

require("./models/index");

app.use("/products", productRoutes);

app.listen(PORT, (req, res) => {
  console.log(`Running on ${PORT}`);
});
