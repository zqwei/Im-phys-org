var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var hbs = require('hbs');
// var http = require('http');

var index = require('./routes/index');
var users = require('./routes/users');
var analyses = require('./routes/analyses');
var codes = require('./routes/codes');
var data = require('./routes/data');
var model = require('./routes/model');

var app = express();
// var server = http.Server(app);
// var io = require('socket.io')(server);

hbs.registerPartials(path.join(__dirname, 'views/partials'));
hbs.registerHelper('ifCond', function(v1, v2, options) {
  if (v1 === v2) {
    return options.fn(this);
  }
  return options.inverse(this);
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')))


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/analyses', analyses);
app.use('/codes', codes);
app.use('/data', data);
app.use('/model', model);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// io.on('connection', function (socket) {
//   console.log('connection open');
// });

// server.listen(10001);
app.listen(10001);

module.exports = app;
