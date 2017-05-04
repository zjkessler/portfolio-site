'use strict';
var express = require('express');
var app = express();
var path = require('path');
var logger = require('morgan');
var port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, './src/client')));
app.use(logger('dev'));

app.listen(port, function () {
	console.log('Express listening on port ' + port);
});
