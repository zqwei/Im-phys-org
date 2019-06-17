'use strict';

var browserSync = require('browser-sync').create(),
  gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  reload = browserSync.reload;

gulp.task('serve',
  [
    'browser-sync'
  ],
  function(){
  gulp.watch('public/javascripts/**.js').on('change', reload);
  gulp.watch('public/stylesheets/**.css').on('change', reload);
  gulp.watch('public/results/**.html').on('change', reload);
});


gulp.task('browser-sync',
  [
    'nodemon'
  ],
  function(){
    browserSync.init(null, {
      proxy: 'http://localhost:10001',
      browser: 'safari',
      port: 10080
    });
});


gulp.task('nodemon',
  [],
  function(done) {
    var running = false;

    return nodemon({
      script: 'app.js',
      watch: ['app.js', 'routes/*.js', 'views/*.*', 'views/partials/*.*']
    })
    .on('start', function(){
      if(!running){
        done();
      }
      running = true;
    })
    .on('restart', function(){
      setTimeout(function(){
        reload();
      }, 500);
    });
});
