var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var axios = require('axios');
var database = require('../database/index.js');
var Sequelize = require('sequelize');

var app = express();
app.use(bodyParser.json());
app.use( bodyParser.urlencoded({ extended: true }) );

app.use(express.static(__dirname + '/../react-client/dist'));


var port = 3000;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});