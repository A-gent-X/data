const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config')

class City extends Model { }
// city_id SERIAL PRIMARY KEY,
// name VARCHAR(32) NOT NULL,
// rating INT NOT NULL,
// country_id INT NOT NULL

City.init({
  city_id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false
  },
  
  name:{
    type: DataTypes.STRING,
    allowNull: true
  },

  rating:{
    type: DataTypes.INTEGER,
    allowNull: true
  },

  country_id:{
    type: DataTypes.INTEGER,
    allowNull: true
  }

}, { sequelize, modelName: 'City', timestamps: false});

module.exports = City;