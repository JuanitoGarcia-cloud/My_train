const express = require('express');
const router = express.Router();
const cityController = require('../controllers/cityController');
const auth = require('../middlewares/auth');

// accessible aux utilisateurs connectés
router.get('/', auth(), cityController.getAllCities);

module.exports = router;