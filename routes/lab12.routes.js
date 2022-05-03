
const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/labs', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'LAB12.html'));
});

module.exports = router;