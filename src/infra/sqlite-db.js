// Arquivo responsável por criar e conectar nosso bd
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const caminhoArq = path.resolve(__dirname,'database.db')

const bd = new sqlite3.Database(caminhoArq);
//creating table
const createTableAd = `CREATE TABLE IF NOT EXISTS Auditorium
(
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "room_number" tinyint,
    "type" varchar(2),
    "seats_av" tinyint(40),
    "total_capacity" tinyint(40)
  );`

  bd.run(createTableAd, (error) => {
    if(error) {
        console.log("Try again", error.message)
    } else {
        console.log("The table has been created successfully.")
    }
  })

process.on('SIGINT', () =>
    bd.close(() => {
        console.log('BD encerrado!');
        process.exit(0);
    })
);

module.exports = bd;