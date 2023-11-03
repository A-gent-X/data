const City = require("./City") 
const Country = require("./Country") 

Country.hasMany(City, {
  foreignKey: 'country_id',
  onDelete: 'CASCADE',
});

City.belongsTo(Country, {
  foreignKey: 'country_id',
});

module.exports = { City, Country };
