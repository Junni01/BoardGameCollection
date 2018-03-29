/*
const collection = function(req, res) {
    res.render('collection', { gameCollection:
            [

            { name:'Catan', year:'1996', plays:'2', won:'1', rating:'8.5'},
                { name:'Eldritch Horror', year:'2012', plays:'7', won:'0', rating:'8.9'},
                { name:'Chess', year:'0000', plays:'5', won:'3', rating:'10.0'},
                { name:'Dogs of War', year:'2016', plays:'7', won:'0', rating:'9.9'}

            ]});
};

module.exports = { collection };*/


const request = require('request');
const apiURL = require('./apiURLs');

const collection = function(req, res) {
    const path = '/api/collection';
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
            res.render('collection', {collection: body});
        }






    }
);
};

module.exports = {
    collection
};

