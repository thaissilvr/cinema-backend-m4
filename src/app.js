//PACKAGES
const express = require('express');
const app = express();
const port = 3004;

//CONTROLLER
const auditorium = require('./controllers/auditorium-controller')

const bd = require('./infra/sqlite-db')

//Middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json())


//ROOT
auditorium(app, bd)

//RUNNING THE SERVER
app.listen(port, () => console.log(`Oi, tô aqui no http://localhost:${port}!`))
