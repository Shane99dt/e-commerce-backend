const express = require("express")
const app = express()
const { categoryExists } = require("../middlewares/categoriesMW")
const { Category } = require("../models")

// Get all categories
app.get("/", async (req, res) => {
  try {
    const categories = await Category.findAll()
    res.json(categories)
  } catch (e) {
    res.status(500).json("Internal server error")
  }
})

// Get the category by his id
app.get("/:id", categoryExists, async (req, res) => {
  res.status(201).json(req.category)
})

module.exports = app
