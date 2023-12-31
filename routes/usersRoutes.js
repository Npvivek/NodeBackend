const express = require('express');
const controller = require('../controllers/usersController');

const router = express.Router();

router.get('/users', controller.getAllUsers);
router.post('/login', controller.login);
router.post('/register', controller.registerUser);

module.exports = router;
