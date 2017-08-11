var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
// var bodyParser = require('body-parser');
// var urlencoded = bodyParser.urlencoded({ extended: false });
var async = require('async');
var url = 'mongodb://localhost:27017/ephys_imaging_datasets';
var MongoClient = mongodb.MongoClient;
var nonS2cFormListResults = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  MongoClient.connect(url, function(err, db){
    if (err){
      console.log('Unable to connect to the database');
    }
    else{
      // console.log('Connect to ephys imaging databsets in analysis.js');
      var non_forms = {};
      var tasks = [
        function(callback){
          var collection = db.collection('nonsim_matched_ephys');
          collection.find({}).toArray(function(err, result){
            if(err){
              return callback(err);
            }
            else if (result.length) {
              non_forms.nonS2cFormList = result;
              callback();
            }
            else{
              res.send('No record at the moment.');
            }
          });
        }
      ];

      async.parallel(tasks, function(err) {
        if (err) return next(err);
        db.close();
        res.render('analyses', {
          title: 'Analyses',
          active:{ analyses: true},
          nonS2cFormList: non_forms.nonS2cFormList,
          results: nonS2cFormListResults
         });
      });
    }
  });
});


router.post('/', function(req, res){
  nonS2cFormListResults=JSON.parse(req.body.data);
  console.log(nonS2cFormListResults);
  res.end();
});

module.exports = router;
