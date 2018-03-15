const mongoose = require('mongoose');

const playsModel = mongoose.model('play');

const playsList = function (req, res) {
    res
        .status(200)
        .json({'play' : 'won'});

};

const addPlay = function (req, res) {

    res.status(201).json({"log a play" : "in progress"});
};

module.exports = {
    playsList,
    addPlay
}