const mysql = require('mysql2');


const  pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database:'node-complete',
    password: 'bebo840512'
})
module.exports = pool.promise()