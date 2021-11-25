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

}
          

module.exports = AuditoriumDAO;