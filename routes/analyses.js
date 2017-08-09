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
      console.log('Connect to ephys imaging databsets in analysis.js');
      var non_forms = {};
      var tasks = [
        function(callback){
          var collection = db.collection('nonsim_matched_ephys');
          collection.find({}).toArray(function(err, result){
            if(err){
              return callback(err);
            }
            else if (result.length) {
              console.log('Here!')
              non_forms.s2cFormList = result;
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
          s2cFormList: non_forms.s2cFormList
         });
      });
      //
      //
      //
      //
      //
      //
      // var collection = db.collection('nonsim_matched_ephys');
      // collection.find({}).toArray(function(err, result){
      //   if(err){
      //     res.send(err);
      //   }
      //   else if (result.length) {
      //     s2cFormList = result;
      //     callback();
      //   }
      //   else{
      //     res.send('No record at the moment.');
      //   }
      // });
      //
      // console.log(s2cFormList);
      //
      // res.render('analyses', {
      //   title: 'Analyses',
      //   active:{ analyses: true},
      //   s2cFormList: s2cFormList
      //  });
    }
  });

});

module.exports = router;
