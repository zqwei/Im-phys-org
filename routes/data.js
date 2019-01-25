var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');

// var url = 'mongodb://druckmannAdmin:Neural!dbadmin@localhost/druckmann_methodology?authSource=admin';
var url = 'mongodb://localhost:27017/ephys_imaging_datasets';
var MongoClient = mongodb.MongoClient;

router.get('/', function(req, res, next) {
  MongoClient.connect(url, function(err, db){
    if (err){
      console.log('Unable to connect to the database');
    }
    else{
      // console.log('Connect to ephys imaging databsets data.js');
      var collection = db.collection('datasets');
      collection.find({}).toArray(function(err, result){
        if(err){
          res.send(err);
        }
        else if (result.length) {
          // console.log(collection);
          res.render('data', {
              title: 'Datasets' ,
              active: {data: true},
              collection: result});
        }
        else{
          res.send('No record at the moment.');
        }
      });
      db.close();
    }
  });
});

module.exports = router;
