const mongoose = require('mongoose');

const playsModel = mongoose.model('play');

const playsList = function (req, res) {
    playsModel.find({}, function (err, plays) {
        if (err) {
            res.status(404).json(err);
        }
        else {

            res.status(200).json(plays);
        }

    });

};

const addPlay = function (req, res) {

    playsModel.create(req.body, function(err, newPlay) {
        if(err) {
            res.status(400).json(err);
        }
        else {
            res.status(201).json(newPlay);
        }
    });
};

module.exports = {
    playsList,
    addPlay
}