const collection = function(req, res) {
    res.render('collection', { gameCollection:
            [

            { name:'Catan', year:'1996', plays:'2', won:'1', rating:'8.5'},
                { name:'Eldritch Horror', year:'2012', plays:'7', won:'0', rating:'8.9'},
                { name:'Chess', year:'0000', plays:'5', won:'3', rating:'10.0'},
                { name:'Dogs of War', year:'2016', plays:'7', won:'0', rating:'9.9'}

            ]});
};

module.exports = { collection };