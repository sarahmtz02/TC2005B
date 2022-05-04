const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users_controller');

router.get('/login', usersController.get_login);

router.post('/users/login', usersController.login);

router.get('/logout', usersController.logout);

module.exports = router;