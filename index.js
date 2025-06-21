var express = require('express');
var app = express();
var db = require('./db');
var gunplaController = require('./gunplaController');
app.use("/gunpla", gunplaController);
module.exports = app;

const gunplaRouter = require('./gunplaController');
app.use('/gunpla', gunplaRouter);
