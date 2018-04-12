/*
const update = function(req, res) {
    res.render('update', { gameLog:
        [

            { game:'Catan', datePlayed:'11-01-2018', won:'Yes'},
            { game:'Carcassonne', datePlayed:'01-02-2018', won:'No'},
            { game:'Scythe', datePlayed:'21-01-2018', won:'Yes'},
            { game:'Eclipse', datePlayed:'5-01-2018', won:'No'}
        ]});
};

module.exports = { update };*/


const request = require('request');
const apiURL = require('./apiURLs');

const showForm1 = function (req, res) {
    res.render('plays');
};

const addData1 = function(req, res) {

    const path = '/api/plays';

    const postdata = {
        name: req.body.name,
        date: req.body.date,
        won: req.body.won

    };

    const requestOptions1 = {
        url: apiURL.server + path,
        method: 'POST',
        json: postdata

    };

    request(
        requestOptions1,
        function (err, response) {
            if (response.statusCode === 201) {
                res.redirect('/plays');
            } else {
                res.render('error', {message: 'Error adding data: ' +
                    response.statusMessage + ' (' + response.statusCode + ')'});
            }
        }
    )

};























const plays = function(req, res) {
    const path = '/api/plays';
    const requestOptions = {
        url: apiURL.server + path,
        method : 'GET',
        json : {},
        qs : {}
    };
    request(
        requestOptions,
        function(err, response, body) {
            if(err) {
                res.sender('error', {message : err.message});
            } else if (response.statusCode !== 200) {
                res.render('error', {message: 'Error accessing API: ' + response.statusMessage + " (" + response.statusCode + ")" });
            } else if (!(body instanceof Array)){
                res.render('error', {message: 'Unexpected response data'});
            } else if (!body.length) {
                res.render('error', {message: 'No documents in collection'});
            } else {
                res.render('plays', {plays: body});
            }






        }
    );
};

module.exports = {
    plays,
    showForm1,
    addData1

};