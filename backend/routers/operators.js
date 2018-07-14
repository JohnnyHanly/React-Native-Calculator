const express          = require('express');
const router           = express.Router();


const operatorController= require('./../controllers/operator-controller');

router.get('/add',operatorController.add) 
router.get('/subtract',operatorController.subtract)
router.get('/multiply',operatorController.multiply)
router.get('/divide',operatorController.divide)
router.get('/modulus', operatorController.modulus)



module.exports = router;