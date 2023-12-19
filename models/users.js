const db = require('./db');

class User {
    static getAllUsers() {
        return db.query('SELECT * FROM users');
    }
}

module.exports = User;
