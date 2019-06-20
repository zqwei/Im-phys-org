var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');

// var url = 'mongodb://druckmannAdmin:Neural!dbadmin@localhost/druckmann_methodology?authSource=admin';
var url = 'mongodb://localhost:27017/ephys_imaging_datasets';
// var url = 'mongodb://mongo/ephys_imaging_datasets';
var MongoClient = mongodb.MongoClient;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('codes', { title: 'Codes' , active:{ codes: true}});
});


/* Add new data. */
router.post('/addmodel', function(req, res) {
  MongoClient.connect(url, function(err, db){
    if (err){
      console.log('Unable to connect to the database');
    }
    else{
      var collection = db.collection('n_models');
      collection.insert(req.body, function(err, result){
        res.send((err === null) ? { msg: ''} : {msg: err});
      });
    }
  });
});

module.exports = router;
