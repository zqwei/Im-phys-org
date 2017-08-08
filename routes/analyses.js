var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('analyses', { title: 'Analyses', active:{ analyses: true} });
});

module.exports = router;
