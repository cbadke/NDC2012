
/**
 * Module dependencies.
 */

var express = require('express'),
    routes = require('./routes'),
    fs = require('fs');

var app = module.exports = express.createServer();

var characters = {};
fs.readFile(__dirname + '/public/cast.json', 'utf-8', function (err, data) {
  characters = JSON.parse(data);
});

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'html');
  app.register(".html", require("jqtpl").express);
  app.use(express.favicon());
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes

app.get('/', routes.index);

app.get('/:name.json', function (req, res, next) {
  console.log('made a json request');
});

app.get('/:name.json?callback=:callback', function (req, res) {

});

app.get('/:name', function (req, res, next) {
//  debugger;
  var character = characters[req.params.name];
  if (character !== undefined) {
    res.render('character', character);
  } else {
    next(new Error('That bad boy does not exist - yoos is crazy'));
  }
});

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
