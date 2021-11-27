//create queries on db
class AuditoriumDAO {
    constructor(db) {
        this.db = db
    }

    list() {
        return new Promise ((res, rej) => {
         const sql = `SELECT * FROM Auditorium`
         this.db.all(sql, (error, rows) => {
            if(error) {
                rej(error.message)
            } else {
                res(rows)
            }
         })
        })
    }

    listId(id) {
        return new Promise ((res, rej) => {
         const sqlEmail = `SELECT * FROM Auditorium WHERE id = ?`
         this.db.all(sqlEmail, id, (error, rows) => {
            if(error) {
                rej(error.message)
            } else {
                res(rows)
            }
         })
        })
    }



    insert(addRoom) {
        return new Promise ((res, rej) => {
            const sql = `INSERT INTO Auditorium (room_number, type, seats_av, total_capacity) VALUES (?, ?, ?, ?)`
        
            this.db.run(sql, [addRoom.room_number, addRoom.type, addRoom.seats_av, addRoom.total_capacity], function (error) {
                if(error){
                    rej({
                        "msg" : error.message,
                        "error" : true 
                    })
                } else {
                    res(this.lastID)
                }
            }
            
        )}
    )}


    deleteById(id) {  
        return new Promise ((req, res)=>{
            const sql = `DELETE * Auditorium WHERE id = ?`
            this.db.run(sql, id, (error) =>{
                if (error) {
                    rej({
                        "msg" : error.message,
                        "error": true
                    })
             } else {
                res({
                    "msg": "Id deleted successfully",
                    "error" : false
                })
             }
            })
        })
    }

    alterById(id) {
        return new Promise ((req, res)=>{
            const sql = `UPDATE Auditorium SET id = ?,
            number_room = ?, type = ?, seats_av =?, total_capacity = ?`
            this.db.run(sql, id, (error) =>{
                if (error) {
                    rej({
                        "msg" : error.message,
                        "error": true
                    })
             } else {
                res({
                    "msg": "Id updated successfully",
                    "error" : false
                })
             }
            })
        })
    }

}
          

module.exports = AuditoriumDAO;