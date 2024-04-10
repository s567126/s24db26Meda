var express = require('express');
const fish_controlers= require('../controllers/fish');
var router = express.Router();
/* GET fishs */
router.get('/', fish_controlers.fish_view_all_Page );

router.get('/fish/:id', fish_controlers.fish_detail);


/* GET detail fish page */
router.get('/detail', fish_controlers.fish_view_one_Page);

/* GET create fish page */
router.get('/create', fish_controlers.fish_create_Page);

/* GET create update page */
router.get('/update', fish_controlers.fish_update_Page);

/* GET delete fish page */
router.get('/delete', fish_controlers.fish_delete_Page);


module.exports = router;


