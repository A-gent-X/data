require('dotenv').config()

const express = require('express')
const app = express()
const sequelize = require('./config')
const cors = require('cors')
const {City, Country} = require('./models');
const {SERVER_PORT} = process.env
const {seed, getCountries, getCities, createCity, deleteCity} = require('./controller.js')

app.use(express.json())
app.use(cors())

// DEV
app.post('/seed', seed)

// COUNTRIES
app.get('/countries', getCountries)

// CITIES
app.post('/cities', createCity)
app.get('/cities', getCities)
app.delete('/cities/:id', deleteCity)

Country.sync({ alter: true })

  .then(() => {
    City.sync({ alter: true })
      .then(() => {
          app.listen(4004, () => console.log(`up on 4004`))
      })
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err)
  })
