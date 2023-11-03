const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config')

class Country extends Model { }
// country_id serial primary key, 
// name varchar

Country.init({
  country_id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false
  },
  
  name:{
    type: DataTypes.STRING,
    allowNull: true
  },

  // rating:{
  //   type: DataTypes.INTEGER,
  //   allowNull: true
  // },

  // country_id:{
  //   type: DataTypes.INTEGER,
  //   allowNull: true
  // }

}, { sequelize, modelName: 'Country', timestamps: false});

module.exports = Country;