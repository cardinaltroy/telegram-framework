require('dotenv').config()
const { Sequelize } = require('sequelize')


module.exports = new Sequelize({
    dialect: process.env.db_dialect,
    storage: process.env.db_location
    //move to .env
})