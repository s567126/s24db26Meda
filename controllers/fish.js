var fish = require('../models/fish');
// List of all fishs
exports.fish_list = function (req, res) {
    res.send('NOT IMPLEMENTED: fish list');
};
// for a specific fish.
exports.fish_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: fish detail: ' + req.params.id);
};
// Handle fish create on POST.
exports.fish_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: fish create POST');
};
// Handle fish delete from on DELETE.
exports.fish_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: fish delete DELETE ' + req.params.id);
};
// Handle fish update form on PUT.
exports.fish_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: fish update PUT' + req.params.id);
};

// List of all fishs
exports.fish_list = async function (req, res) {
    try {
        thefishs = await fish.find();
        res.send(thefishs);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.fish_view_all_Page = async function (req, res) {
    try {
        thefishs = await fish.find();
        res.render('fish', { title: 'fish Search Results', results: thefishs });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};


// Handle fish create on POST.
    exports.fish_create_post = async function (req, res) {
    console.log(req.body)
    let document = new fish();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"fish_type":"goat", "cost":12, "size":"large"}
    document.name = req.body.name;
    document.life_span = req.body.life_span
    document.color = req.body.color;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};




