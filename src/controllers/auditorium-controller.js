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

    app.get('/auditorium/:id', async (req, res) => {
        const id = req.params.id
        
        try {
            const aud = await help.listId(id)
            res.json(aud)
        } catch (error) {
            res.status(400).json(error)
        }
    })



    app.post('/auditorium', async (req,res) => {
        try {
        const body = req.body
        const addRoom = new Auditorium(body.room_number, body.type, body.seats_av, body.total_capacity)
        const add = await help.insert(addRoom)
        res.json(add)     
        
        } catch (error) {
        res.json({
            "msg": error.message,
            "error": true
        })
    }
    })

    app.delete(('/auditorium/:id'), async (req, res) => {
        const id = parseInt(req.params.id)

        try {
            const dlt = await help.deleteById(id)
            res.json(dlt)
        } catch (error) {
            res.status(400).json(error)
        }

    })

    app.put(('/auditorium/:id'), async (req, res) => {
       const id = req.params.id
       const body = req.body

       try {
           const upd = await help.alterById(id, body)
           res.json(upd)
           
       } catch (error) {
        res.status(400).json(error)
       }

    })


}


module.exports = auditorium