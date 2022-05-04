const express = require('express');
const router = express.Router();
const LAB13Controller = require('../controllers/LAB13_controller');

router.get('/LAB12', LAB13Controller.LAB12);

router.get('/', LAB13Controller.inicio);

router.get('/nuevo', LAB13Controller.get_nuevo);

router.post('/nuevo', LAB13Controller.post_nuevo);

module.exports = router;