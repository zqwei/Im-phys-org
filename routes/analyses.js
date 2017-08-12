var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var async = require('async');
var url = 'mongodb://localhost:27017/ephys_imaging_datasets';
var MongoClient = mongodb.MongoClient;

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
              non_forms.nonFormList = result;
              callback();
            }
            else{
              res.send('No record at the moment.');
            }
          });
        },
        function(callback){
          var collection = db.collection('models');
          collection.find({}).toArray(function(err, result){
            if(err){
              return callback(err);
            }
            else if (result.length) {
              non_forms.modelList = result;
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
          nonFormList: non_forms.nonFormList,
          nonS2CModelList: non_forms.modelList[0].models,
          nonC2SModelList: non_forms.modelList[1].models
         });
      });
    }
  });
});

module.exports = router;
