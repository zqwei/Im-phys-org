var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var createIssue = require( 'github-create-issue');
var issuer = require('./issuer.json')

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
        if(err){
          res.send(err);
        }
        else{
          var user = req.body.firstname + ' ' + req.body.lastname;
          var title = 'New codes from ' + user;
          var email = req.body.email;
          var repo = req.body.repo;
          var ref = req.body.ref;
          var code = req.body.code_type;
          var body_text = 'User name: '+user + '<br> Email: ' + email + '<br> Code type:' + code + '<br> Repo: ' + repo;
          var opts = {
              'token': issuer.token,
              'useragent': issuer.useragent,
              'labels': ['New codes'],
              'body': body_text
          };
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
