require('dotenv').config()
const express = require('express')
const app =  express()

const { DB_PORT } = process.env

app.listen(DB_PORT, (req, res) => {
  console.log(`Running on ${DB_PORT}`)
})