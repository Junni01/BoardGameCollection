const mongoose = require('mongoose');

const collectionModel = mongoose.model('game');

const collectionList = function (req, res) {
  res
      .status(200)
      .json({'name' : 'rating'});

};

const addGame = function (req, res) {

    res.status(201).json({"add game to collection" : "in progress"});
};

module.exports = {
    collectionList,
    addGame
}