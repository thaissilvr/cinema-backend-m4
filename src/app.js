//PACKAGES
const express = require('express');
const app = express();


//CONTROLLER
const auditorium = require('./controllers/auditorium-controller')

const bd = require('./infra/sqlite-db')

//Middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json())


//ROOT
auditorium(app, bd)

module.exports = app

