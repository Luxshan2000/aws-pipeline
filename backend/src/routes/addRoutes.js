const express = require('express');
const router = express.Router();
const addData = require('../controllers/addData');


router.post('/item', addData.addItem)


module.exports = router;