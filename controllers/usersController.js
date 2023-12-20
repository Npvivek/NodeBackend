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

    static async registerUser(req, res) {
        const { firstName, lastName, email, password, confirmPassword } = req.body;

        try {
            //check if password and confirmPassword match
            if (password !== confirmPassword) {
                return res.status(400).json({ error: 'Passwords do not match' });
            }

            //check if email already exists
            const existingUser = await User.findUserByEmail(email);
            if (existingUser) {
                return res.status(400).json({ error: 'Email already registered' });
            }

            //Register the user
            await User.registerUser(firstName, lastName, email, password);
            res.json({ message: 'User registered successfully' });

        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async login(req, res) {
        try {
            const { email, password } = req.body;

            //find user by email and password
            const user = await User.findByEmailandPassword(email, password);

            //check if user exists
            if (!user) {
                return res.status(400).json({ error: 'Invalid email or password' });
            }

            //verify password
            const passwordMatch = await User.verifyPassword(password, user.hashed_password);

            //check if password matches
            if (!passwordMatch) {
                return res.status(400).json({ error: 'Invalid credentials' });
            }

            res.json({ message: 'Login successful' });

        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = UserController;
