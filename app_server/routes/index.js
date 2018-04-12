var express = require('express');
var router = express.Router();

const ctrlMain = require('../controllers/main');
const ctrlCollection = require('../controllers/ctrlCollection');
const ctrlPlays = require('../controllers/ctrlPlays');
/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/collection', ctrlCollection.collection);
router.get('/plays', ctrlPlays.plays);

router
    .route('/collection/add')
    .get(ctrlCollection.showForm)
    .post(ctrlCollection.addData);

router
    .route('/plays')
    .get(ctrlPlays.showForm1)
    .post(ctrlPlays.addData1)


module.exports = router;
