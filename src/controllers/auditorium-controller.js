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



    app.post('/auditorium', (req,res) => {
        try {
        const body = req.body
        const alteredRoom = new Auditorium(body.room_number, body.type, body.seats_av, body.total_capacity)
        help.insert(addRoom)
            .then((resposta)=>{
                res.json(resposta)
                console.log(resposta)
            })
            .catch((erro)=>{
                res.json(erro)
                console.log(erro)
            })
        
    } catch {
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
       

    })


}


module.exports = auditorium