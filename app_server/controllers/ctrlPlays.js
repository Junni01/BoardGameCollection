const update = function(req, res) {
    res.render('update', { gameLog:
        [

            { game:'Catan', datePlayed:'11-01-2018', won:'Yes'},
            { game:'Carcassonne', datePlayed:'01-02-2018', won:'No'},
            { game:'Scythe', datePlayed:'21-01-2018', won:'Yes'},
            { game:'Eclipse', datePlayed:'5-01-2018', won:'No'}
        ]});
};

module.exports = { update };