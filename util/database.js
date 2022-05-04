const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'A01703113_lab17',
    password: ''
});
module.exports = pool.promise();
