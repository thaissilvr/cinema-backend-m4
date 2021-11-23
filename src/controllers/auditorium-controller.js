const Auditorium = require('../models/Auditorium')
const AuditoriumDAO = require('../dao/AuditoriumDao')

const auditorium = (app, bd) => {
   const help = new AuditoriumDAO(bd)
    app.get('/auditorium', async (req, res) => {
        
        try {
            const aud = await help.list()
            res.json(aud)
        } catch (error) {
            res.status(400).json(error)
        }
    })

    app.post('/auditorium', (req,res) => {
        const body = req.body
        res.send('You are on the POST root. Welcome to our cinema! 😎')
    })
}


module.exports = auditorium