var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('develop', { title: 'Develop' , active:{ develop: true}});
});

module.exports = router;
