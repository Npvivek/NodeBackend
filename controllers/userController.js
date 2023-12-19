// controllers/userController.js

const User = require('../models/user');

class UserController {
    static async getAllUsers(req, res) {
        try {
            const [users, fields] = await User.getAllUsers();
            res.json(users);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = UserController;
