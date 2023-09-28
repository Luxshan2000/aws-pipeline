const express = require('express');
const router = express.Router();
const addData = require('../controllers/addData');


router.get('/items', addData.addItem)


module.exports = router;