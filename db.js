const mysql = require('mysql2');

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '3441',
    database: 'mydata',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// console.log(pool);

module.exports = pool.promise();
