var express = require('express');
var passport = require('passport');
const fish_controlers = require('../controllers/fish');
var router = express.Router();

// A little function to check if we have an authorized user and continue on
const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    res.redirect("/login");
}
/* GET fishs */
router.get('/', fish_controlers.fish_view_all_Page);

router.get('/fish/:id', fish_controlers.fish_detail);

/* GET detail fish page */
router.get('/detail', fish_controlers.fish_view_one_Page);

/* GET create fish page */
router.get('/create', secured, fish_controlers.fish_create_Page);

/* GET update fish page */
router.get('/update', secured, fish_controlers.fish_update_Page);

router.post('/login', passport.authenticate('local'), function (req, res) {
    res.redirect('/');
});
/* GET delete fish page */
router.get('/delete', secured, fish_controlers.fish_delete_Page);

module.exports = router;
