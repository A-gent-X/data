const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:Admin@localhost:5432/unit5') 

module.exports = sequelize
