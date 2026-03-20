const express = require('express');
const router = express.Router();
const lineController = require('../controllers/lineController');
const auth = require('../middlewares/auth');

router.get('/', auth(), lineController.getAllLinesWithStops);


module.exports = router;