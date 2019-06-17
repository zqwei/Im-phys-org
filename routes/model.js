var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('model', { title: 'Models' , active:{ model: true}});
});

module.exports = router;
