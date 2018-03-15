const mongoose = require('mongoose');

const collectionModel = mongoose.model('game');

const collectionList = function (req, res) {
  collectionModel.find({}, function (err, games) {
      if (err) {
          res.status(404).json(err);
      }
      else {

          res.status(200).json(games);
      }

      });
};

const addGame = function (req, res) {

     collectionModel.create(req.body, function(err, newGame) {
         if(err) {
             res.status(400).json(err);
         }
         else {
             res.status(201).json(newGame);
         }
         });
};

module.exports = {
    collectionList,
    addGame
}