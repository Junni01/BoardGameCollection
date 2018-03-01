const mongoose = require('mongoose');

const gamesSchema = new mongoose.Schema({name: String, year: String, plays: String, won: String, rating: String});
const playsSchema = new mongoose.Schema({game: String, datePlayed: String, won: String});

mongoose.model('games', gamesSchema);
mongoose.model('plays', playsSchema);


