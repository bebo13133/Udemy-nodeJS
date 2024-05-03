const mysql = require('mysql2');


const  pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database:'node-complete',
    password: 'bebo8405126480'
})
module.exports = pool.promise()