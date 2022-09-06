const express = require('express')
const app = express()


app.get('/', (req, res) => {
  console.log('products get')
})


module.exports = app