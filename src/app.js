//PACKAGES
const express = require('express');
const app = express();
const port = 3001;

//CONTROLLER
const auditorium = require('./controllers/auditorium-controller')

//Middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use((req, res, next)=>{
  console.log('We are on, baby')
  next()
})

//ROOT
auditorium(app)

//RUNNING THE SERVER
app.listen(port, () => console.log(`Oi, tô aqui no http://localhost:${port}!`))
