let express = require('express');
let router = express.Router();
let carController  = require('../controllers/car.controller');

router.post('/create',carController.create);
router.delete('/delete', carController.delete);
router.get('/get',carController.getCar);
router.put('/update/',carController.update);
router.post('/show',carController.filter);

module.exports = router;