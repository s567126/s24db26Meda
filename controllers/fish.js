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
// for a specific.fish.
// for a specific fish.
exports.fish_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await fish.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
// Handle fish update form on PUT.
exports.fish_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await fish.findById(req.params.id)
        // Do updates of properties
        if (req.body.name) toUpdate.name = req.body.name;
        if (req.body.life_span) toUpdate.life_span = req.body.life_span;
        if (req.body.color) toUpdate.color = req.body.color;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}failed`);
    }
};
// Handle fish delete on DELETE.
exports.fish_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await fish.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};
// Handle a show one view with id specified by query
exports.fish_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await fish.findById(req.query.id)
        res.render('fishdetail',
            { title: 'fish Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for creating a fish.
// No body, no in path parameter, no query.
// Does not need to be async
exports.fish_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('fishcreate', { title: 'fish Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for updating a fish.
// query provides the id
exports.fish_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await fish.findById(req.query.id)
        res.render('fishupdate', { title: 'fish Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle a delete one view with id from query
exports.fish_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await fish.findById(req.query.id)
        res.render('fishdelete', {
            title: 'fish Delete', toShow:
                result
        });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};




