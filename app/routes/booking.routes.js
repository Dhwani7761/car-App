let express = require('express');
let router = express.Router();
let bookingcontroller  = require('../controllers/booking.controller');

router.post('/create',bookingcontroller.create);

module.exports = router;