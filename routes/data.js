var express = require('express');
var router = express.Router();
var itemRouter = express.Router({mergeParams: true});

/* GET home page. */

router.use('/:data')


router.get('/', function(req, res, next) {
  res.render('partials/_data_collection', {subject:'Hello!'});
  res.render('data', { title: 'Datasets' , active:{ data: true}});
  console.log('I am here!');
});

module.exports = router;
