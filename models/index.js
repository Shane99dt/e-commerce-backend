const { Sequelize } = require('sequelize')
const { DB_DATABASE, DB_HOST, DB_USERNAME, DB_PASSWORD } = process.env

const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'mysql',
  logging: false
})

const connectDb = async () => {
  try{
    await sequelize.authenticate()
    console.log("Connected to the DB")
  }catch(e){
    console.log(e)
  }
}

connectDb()

const Product = require('./product')(sequelize)
sequelize.sync({ alter: true })


const db = {
  sequelize,
  Product
}

module.exports = db