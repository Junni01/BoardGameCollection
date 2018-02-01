const index = function(req, res) {
    res.render('index', { title: 'Board game collection' });
};

module.exports = {
    index
};