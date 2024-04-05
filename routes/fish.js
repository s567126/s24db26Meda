var express = require('express');
const fish_controlers= require('../controllers/fish');
var router = express.Router();
/* GET fishs */
router.get('/', fish_controlers.fish_view_all_Page );

router.get('/fish/:id', fish_controlers.fish_detail);

module.exports = router;


