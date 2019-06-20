var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var createIssue = require( 'github-create-issue');

// var url = 'mongodb://druckmannAdmin:Neural!dbadmin@localhost/druckmann_methodology?authSource=admin';
var url = 'mongodb://localhost:27017/ephys_imaging_datasets';
// var url = 'mongodb://mongo/ephys_imaging_datasets';
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

/* Add new data. */
router.post('/adddata', function(req, res) {
  MongoClient.connect(url, function(err, db){
    if (err){
      console.log('Unable to connect to the database');
    }
    else{
      var collection = db.collection('n_datasets');
      collection.insert(req.body, function(err, result){
        if(err){
          res.send(err);
        }
        else{
          var user = req.body.firstname + ' ' + req.body.lastname;
          var title = 'New dataset from ' + user;
          var email = req.body.email;
          var repo = req.body.repo;
          var ref = req.body.ref;
          var code = req.body.data_type;
          var body_text = 'User name: '+user + '<br> Email: ' + email + '<br> Data type:' + code + '<br> Repo: ' + repo;
          var opts = {
              'token': 'ccc8f9dc11b3bdc71bb219ef0a43a2542f13c9db',
              'useragent': 'imphys-issuer',
              'labels': ['New dataset'],
              'body': body_text
          };
          console.log('here ----')
          createIssue( 'zqwei/Im-phys-API', title, opts, clbk );
          res.send((err === null) ? { msg: '' } : { msg: err });
        }
      });
    }
  });
});


function clbk(error, issue, info) {
    // Check for rate limit information...
    if ( info ) {
        console.error( 'Limit: %d', info.limit );
        console.error( 'Remaining: %d', info.remaining );
        console.error( 'Reset: %s', (new Date( info.reset*1000 )).toISOString() );
    }
    if ( error ) {
        throw new Error( error.message );
    }
    console.log( JSON.stringify( issue ) );
    // returns <issue_data>
}

module.exports = router;
