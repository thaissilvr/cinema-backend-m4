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
}

module.exports = AuditoriumDAO