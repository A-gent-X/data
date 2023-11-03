require('dotenv').config()
const {Country,City} = require("./models")
const db = require('./db'); // Replace with your actual database module/path

const Sequelize = require('sequelize');


const controller = {

  getCountries: (req, res) => {
    sequelize.query("SELECT * FROM countries")
      .then((dbRes) => {
        res.status(200).send(dbRes[0]);
      })
      .catch((err) => {
     
        res.status(500).send(err.message);
      });
  },

  
  createCity: (req, res) => {
    const { name, rating, countryId } = req.body;

   
    const query = 'INSERT INTO cities (name, rating, country_id) VALUES (:name, :rating, :countryId)';

  
    sequelize.query(query, { 
      replacements: { name, rating, countryId }, 
      type: sequelize.QueryTypes.INSERT 
    })
    .then((dbRes) => {
     
      res.status(200).send(dbRes[0]);
    })
    .catch((err) => {
  ge
      res.status(500).send(err.message);
    });
  },

  getCities: (req, res) => {

    const query = `
      SELECT 
        c.city_id,
        c.name AS city,
        c.rating,
        c.country_id,
        co.name AS country
      FROM 
        cities AS c
      JOIN 
        countries AS co ON c.country_id = co.country_id
    `;

    sequelize.query(query, { type: sequelize.QueryTypes.SELECT })
      .then((dbRes) => {
     
        res.status(200).send(dbRes);
      })
      .catch((err) => { 
       
        res.status(500).send(err.message);
      });
  },

  deleteCity: (req, res) => {
    const { city_id } = req.params;

  
    const query = 'DELETE FROM cities WHERE city_id = :city_id';

   
    sequelize.query(query, {
      replacements: { city_id },
      type: sequelize.QueryTypes.DELETE
    })
    .then((dbRes) => {
      res.status(200).send(dbRes[0]);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
  },

};





module.exports = controller;

const {SERVER_PORT} = process.env

module.exports = {

    getCountries: (req, res) => {
        Country.findAll({
            include: [City]
        })
                .then((dbRes) => {
                    res.status(200).send(dbRes)
                 }).catch((ERR) => console.log(ERR))
        },

    createCity: (req, res) => {
        City.create({
            name: req.body.name, 
            rating: req.body.rating,
            country_id: req.body.country_id
        })       
        .then((dbRes) => {
            res.status(200).send(dbRes)
         }).catch((ERR) => console.log(ERR))
     },

     getCities: (req, res) => {
        City.findAll({
            include: [Country]
        })
                .then((dbRes) => {
                    res.status(200).send(dbRes)
                 }).catch((ERR) => console.log(ERR))
        },

    deleteCity: (req, res) => {
        City.destroy({
            where: {
                city_id: req.params.id
            }
        })
        .then((dbRes) => {
            res.status(200).send("successfully deleted")
         }).catch((ERR) => console.log(ERR))
    },

    seed: (req, res) => {
        sequelize.query(`
        drop table if exists cities;
        drop table if exists countries;

        CREATE TABLE cities (
            city_id serial PRIMARY KEY,
            name varchar(255),
            rating integer,
            country_id integer,
            FOREIGN KEY (country_id)
              REFERENCES countries (country_id)
              ON DELETE RESTRICT
          );

        create table cities(
            city_id serial primary key,
            name: varchar
            rating: integer;
            country_id: country_id;
        );

        create table countries (
            country_id serial primary key, 
            name varchar
        ); 

            insert into countries (name)
            values ('Afghanistan'),
            ('Albania'),
            ('Algeria'),
            ('Andorra'),
            ('Angola'),
            ('Antigua and Barbuda'),
            ('Argentina'),
            ('Armenia'),
            ('Australia'),
            ('Austria'),
            ('Azerbaijan'),
            ('Bahamas'),
            ('Bahrain'),
            ('Bangladesh'),
            ('Barbados'),
            ('Belarus'),
            ('Belgium'),
            ('Belize'),
            ('Benin'),
            ('Bhutan'),
            ('Bolivia'),
            ('Bosnia and Herzegovina'),
            ('Botswana'),
            ('Brazil'),
            ('Brunei'),
            ('Bulgaria'),
            ('Burkina Faso'),
            ('Burundi'),
            ('Côte d''Ivoire'),
            ('Cabo Verde'),
            ('Cambodia'),
            ('Cameroon'),
            ('Canada'),
            ('Central African Republic'),
            ('Chad'),
            ('Chile'),
            ('China'),
            ('Colombia'),
            ('Comoros'),
            ('Congo'),
            ('Costa Rica'),
            ('Croatia'),
            ('Cuba'),
            ('Cyprus'),
            ('Czech Republic'),
            ('Democratic Republic of the Congo'),
            ('Denmark'),
            ('Djibouti'),
            ('Dominica'),
            ('Dominican Republic'),
            ('Ecuador'),
            ('Egypt'),
            ('El Salvador'),
            ('Equatorial Guinea'),
            ('Eritrea'),
            ('Estonia'),
            ('Eswatini'),
            ('Ethiopia'),
            ('Fiji'),
            ('Finland'),
            ('France'),
            ('Gabon'),
            ('Gambia'),
            ('Georgia'),
            ('Germany'),
            ('Ghana'),
            ('Greece'),
            ('Grenada'),
            ('Guatemala'),
            ('Guinea'),
            ('Guinea-Bissau'),
            ('Guyana'),
            ('Haiti'),
            ('Holy See'),
            ('Honduras'),
            ('Hungary'),
            ('Iceland'),
            ('India'),
            ('Indonesia'),
            ('Iran'),
            ('Iraq'),
            ('Ireland'),
            ('Israel'),
            ('Italy'),
            ('Jamaica'),
            ('Japan'),
            ('Jordan'),
            ('Kazakhstan'),
            ('Kenya'),
            ('Kiribati'),
            ('Kuwait'),
            ('Kyrgyzstan'),
            ('Laos'),
            ('Latvia'),
            ('Lebanon'),
            ('Lesotho'),
            ('Liberia'),
            ('Libya'),
            ('Liechtenstein'),
            ('Lithuania'),
            ('Luxembourg'),
            ('Madagascar'),
            ('Malawi'),
            ('Malaysia'),
            ('Maldives'),
            ('Mali'),
            ('Malta'),
            ('Marshall Islands'),
            ('Mauritania'),
            ('Mauritius'),
            ('Mexico'),
            ('Micronesia'),
            ('Moldova'),
            ('Monaco'),
            ('Mongolia'),
            ('Montenegro'),
            ('Morocco'),
            ('Mozambique'),
            ('Myanmar'),
            ('Namibia'),
            ('Nauru'),
            ('Nepal'),
            ('Netherlands'),
            ('New Zealand'),
            ('Nicaragua'),
            ('Niger'),
            ('Nigeria'),
            ('North Korea'),
            ('North Macedonia'),
            ('Norway'),
            ('Oman'),
            ('Pakistan'),
            ('Palau'),
            ('Palestine State'),
            ('Panama'),
            ('Papua New Guinea'),
            ('Paraguay'),
            ('Peru'),
            ('Philippines'),
            ('Poland'),
            ('Portugal'),
            ('Qatar'),
            ('Romania'),
            ('Russia'),
            ('Rwanda'),
            ('Saint Kitts and Nevis'),
            ('Saint Lucia'),
            ('Saint Vincent and the Grenadines'),
            ('Samoa'),
            ('San Marino'),
            ('Sao Tome and Principe'),
            ('Saudi Arabia'),
            ('Senegal'),
            ('Serbia'),
            ('Seychelles'),
            ('Sierra Leone'),
            ('Singapore'),
            ('Slovakia'),
            ('Slovenia'),
            ('Solomon Islands'),
            ('Somalia'),
            ('South Africa'),
            ('South Korea'),
            ('South Sudan'),
            ('Spain'),
            ('Sri Lanka'),
            ('Sudan'),
            ('Suriname'),
            ('Sweden'),
            ('Switzerland'),
            ('Syria'),
            ('Tajikistan'),
            ('Tanzania'),
            ('Thailand'),
            ('Timor-Leste'),
            ('Togo'),
            ('Tonga'),
            ('Trinidad and Tobago'),
            ('Tunisia'),
            ('Turkey'),
            ('Turkmenistan'),
            ('Tuvalu'),
            ('Uganda'),
            ('Ukraine'),
            ('United Arab Emirates'),
            ('United Kingdom'),
            ('United States of America'),
            ('Uruguay'),
            ('Uzbekistan'),
            ('Vanuatu'),
            ('Venezuela'),
            ('Vietnam'),
            ('Yemen'),
            ('Zambia'),
            ('Zimbabwe');
        `).then(() => {
            console.log('DB seeded!')
            res.sendStatus(200)
        }).catch(err => console.log('error seeding DB', err))
    }
}