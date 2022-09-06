const express = require("express")
const app = express()
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
app.get("/:id", async (req, res) => {
  const { id } = req.params

  try {
    const category = await Category.findOne({
      where: {
        id,
      },
    })

    if (category) {
      req.status(201).json(category)
    } else {
      res.status(404).json("Category not found")
    }
  } catch (e) {
    res.status(500).json("Internal server error")
  }
})

// Get all product of a category
// app.get("/:id/product")

module.exports = app
