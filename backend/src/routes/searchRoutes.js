const express = require('express');
const router = express.Router();
const lineController = require('../controllers/lineController');
const auth = require('../middlewares/auth');

router.get('/search', auth(), lineController.searchRoute);

module.exports = router;