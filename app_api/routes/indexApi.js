const express = require('express');
const router = express.Router();

const ctrlApiCollection = require('../controllers/ctrlApiCollection');
const ctrlApiPlays = require('../controllers/ctrlApiPlays');

router
    .route('/collection')
    .get(ctrlApiCollection.collectionList)
    .post(ctrlApiCollection.addGame);

router
    .route('/plays')
    .get(ctrlApiPlays.playsList)
    .post(ctrlApiPlays.addPlay);

module.exports = router;

