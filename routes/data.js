var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('data', { title: 'Datasets' , active:{ data: true}});
});

module.exports = router;