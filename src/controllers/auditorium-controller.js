const Auditorium = require('../models/Auditorium')

const auditorium = (app) => {
    app.get('/auditorium', (req, res) => {
        res.send('You are on the GET root. Welcome to our cinema! 😎')
    })

    app.post('/auditorium', (req,res) => {
        const body = req.body
        res.send('You are on the POST root. Welcome to our cinema! 😎')
    })
}


module.exports = auditorium