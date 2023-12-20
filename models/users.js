const db = require('../db');
const bcrypt = require('bcrypt');

class User {
    static getAllUsers() {
        try {
            return db.execute('SELECT * FROM users');
        } catch (error) {
            console.log(error);
        }
    }

    static async findUserByEmail(email) {
        try {
            const [users, fields] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
            return users[0] || null;
        } catch (error) {
            console.log(error);
        }
    }

    static async registerUser(firstName, lastName, email, password) {
        const hashedPassword = await bcrypt.hash(password, 10);

        const sql = 'INSERT INTO users (first_name, last_name, email, password, hashed_password) VALUES (?, ?, ?, ?, ?)';
        const values = [firstName, lastName, email, password, hashedPassword];

        return await db.query(sql, values);


    }

    static async findByEmailandPassword(email, password) {
        try {
            const [users, fields] = await db.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password]);
            // console.log(users, fields);
            return users[0];
        } catch (error) {
            console.log(error);
        }
    }

    static async verifyPassword(password, hashedPassword) {
        try {
            return await bcrypt.compare(password, hashedPassword);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = User;
