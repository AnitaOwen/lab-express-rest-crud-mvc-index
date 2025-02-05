const express = require('express')

const app = express()

const locationsController = require('./controllers/locations.controller.js')
const equipmentController = require('./controllers/machines.controller.js')
const peopleController = require('./controllers/persons.controller.js')
const plansController = require('./controllers/plans.controller.js')

// MIDDLEWARE FOR CONTROLLERS
app.use('/locations', locationsController)
app.use('/equipment', equipmentController)
app.use('/people', peopleController)
app.use('/plans', plansController)

// ROUTES
app.get('/', (req, res) => {
    res.send('"Hello, world!"')
  })

  // 404 PAGE
app.get('*', (req, res) => {
  res.json({ message: "Sorry, no page found!" })
})


  

  module.exports = app