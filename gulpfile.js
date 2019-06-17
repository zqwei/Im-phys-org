'use strict';

var gulp = require('gulp');
var wrench = require('wrench');

wrench
  .readdirSyncRecursive('./gulp_task')
  .filter(function(file){
    return(/\.(js)$/i).test(file);
  })
  .map(function(file){
    require('./gulp_task/' + file);
  })

gulp.task('default', ['serve']);
