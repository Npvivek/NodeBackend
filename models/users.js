const db = require('../db');

class User {
    static getAllUsers() {
        try {
            return db.execute('SELECT * FROM users');
        } catch (error) {
            console.log(error);
        }
    }

    static async findByEmailandPassword(email, password) {
        try {
            const [users, fields] = await db.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password]);
            return users[0];
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = User;
