const express = require('express');
const controller = require('../controllers/usersController');

const router = express.Router();

router.get('/users', controller.getAllUsers);

module.exports = router;
