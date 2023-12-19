const User = require('../models/users');

class UserController {
    static async getAllUsers(req, res) {
        try {
            const [users, fields] = await User.getAllUsers();
            res.json(users);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async login(req, res) {
        try {
            const { email, password } = req.body;
            const user = await User.findByEmailandPassword(email, password);
            if (user) {
                res.json(user);
            } else {
                res.status(401).json({ error: 'Invalid login credentials' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = UserController;
