"use strict";

var express = require('express'); //get the router portion of that express variable.


var router = express.Router();
router.get('/', function (req, res) {
  res.render("index");
}); //how to export router

module.exports = router;