const mysql = require('mysql2');

const options = {
    host: "localhost",
    user: process.env.librariaUsername,
    database: "libraria",
    password: process.env.librariaPassword
}
const pool = mysql.createPool(options);


module.exports = pool.promise();


