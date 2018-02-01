var express = require('express');
var router = express.Router();

const ctrlMain = require('../controllers/main');
const ctrlConnection = require('../controllers/ctrlConnection');
const ctrlUpdate = require('../controllers/ctrlUpdate');
/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/collection', ctrlConnection.collection);
router.get('/update', ctrlUpdate.update);


module.exports = router;
