const mongoose = require('mongoose');

const dbURI =  'mongodb://junni:junnitest@ds253468.mlab.com:53468/boardgames'

mongoose.connect(dbURI);

mongoose.connection.on('connected', function() {
    console.log('Mongoose connected to' + dbURI);

});

mongoose.connection.on('error', function(err) {
    console.log('Mongoose connection error:', err);

});

mongoose.connection.on('disconnected', function() {
    console.log('Mongoose disconnected');

});

require('./appSchemas');

