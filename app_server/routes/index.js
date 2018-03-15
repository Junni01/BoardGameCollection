var express = require('express');
var router = express.Router();

const ctrlMain = require('../controllers/main');
const ctrlCollection = require('../controllers/ctrlCollection');
const ctrlPlays = require('../controllers/ctrlPlays');
/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/collection', ctrlConnection.collection);
router.get('/update', ctrlUpdate.update);


module.exports = router;
