const express = require('express');
const router = express.Router();
const getData = require('../controllers/getData');


router.get('/items', getData.getAllItem)


module.exports = router;