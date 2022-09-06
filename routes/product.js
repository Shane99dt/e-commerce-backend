const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.json('products get')
})


module.exports = app