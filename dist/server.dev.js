"use strict";

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

var express = require('express');

var app = express();

var expressLayouts = require("express-ejs-layouts"); //Sets view engine


app.set('view engine', 'ejs'); //Where our views will come from

app.set('views', __dirname + '/views'); //Hook up express layouts. Every single html file will be put inside
//this layout file so we don't have to duplicate the header and
//footer stuff

app.set('layout', 'layouts/layout');
app.use(expressLayouts);

var indexRouter = require('./routes/index'); //where stylesheets and pictures etc are


app.use(express["static"]('public'));

var mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true
});
var db = mongoose.connection;
db.on("error", function (error) {
  return console.error(error);
});
db.once('open', function () {
  return console.log('Connection to Mongoose');
}); //We want the indexRouter to handle the 
//root path of our application

app.use('/', indexRouter);
app.listen(process.env.PORT || 3000);