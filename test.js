
const mysql = require('mysql2');
const options = {
    host: "localhost",
    user: "albin",
    database: "Libraria",
    password: "Libraria123"
}
const pool = mysql.createPool(options);

module.exports = pool;

// pool.getConnection((error, connection) => {
//     if (error) {
//       console.error('Error acquiring connection from pool: ', error);
//       return;
//     }
  
//     connection.query('SELECT * FROM libra', (queryError, results) => {
//       connection.release(); // Release the connection back to the pool
  
//       if (queryError) {
//         console.error('Error executing query: ', queryError);
//         return;
//       }
  
//       console.log('Query results: ', results);
//     });
//   });

