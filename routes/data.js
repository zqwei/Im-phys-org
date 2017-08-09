var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var datasetSchema = mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  description:{
    type: String,
    required: true
  },
  label:{
    type: String,
    required: true
  },
  datasets:{
    Name: {type: String},
    Label: {type: String},
    OtherLabel: {type: String},
    Description: {type: String},
    Reference: {type: String},
    Link: {type: String},
  }
});

datasetSchema.set('toJSON', { virtuals: true });

var Datasets = mongoose.model('Datasets', datasetSchema);

Datasets.getDatasets = function(callback, limit){
  Datasets.find(callback).limit(limit);
};

Datasets.getDatasetbyId = function(id, callback){
  Datasets.findById(id, callback);
};

/* GET home page. */

var _id = "598a04f3e0c7ca56a5d97dc3";

router.get('/', function(req, res, next) {
  Datasets.getDatasets(function(err, Datasets){
    if(err){throw err;}
    res.render('data', {
        title: 'Datasets' ,
        active: {data: true},
        collection: Datasets});
  });
});

module.exports = router;
