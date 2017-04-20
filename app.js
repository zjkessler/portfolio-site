'use strict';
var express = require('express');
var app = express();
var path = require('path');
var logger = require('morgan');

app.use(express.static(path.join(__dirname, './src/client')));
app.use(logger('dev'));

app.listen(3000, function () {
	console.log('Express listening on port 3000');
});
