const express = require('express');
const router = express.Router();
const { getWeatherByCity } = require('../controllers/weatherController');
const rateLimiter = require('../middlewares/rateLimiter');
const { ensureAuth } = require('../controllers/authController');

router.use(ensureAuth);
router.use(rateLimiter);
router.get('/:city', getWeatherByCity);

module.exports = router;
