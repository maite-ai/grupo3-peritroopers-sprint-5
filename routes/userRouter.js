const express = require('express');
const router = express.Router();
const controller = require('../controller/usersController');

router.get('/register', controller.register);

router.get('/login', controller.login);

module.exports = router;