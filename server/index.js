var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');

var app = express();


var port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});