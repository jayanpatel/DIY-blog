// DEPENDENCIES
var express = require('express');
    morgan = require('morgan');
    mongoose = require('mongoose');
    bodyParser = require('body-parser');
    md5 = require('md5');
    cookieParser = require('cookie-parser');
    // dotenv = require('dotenv').load();
    // Yelp = require('yelp');

var port = process.env.PORT || 3000;
var app = express();

// MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static('public'));
app.use(cookieParser());

// LISTENER
app.listen( port );

// DATABASE
mongoose.connect('mongodb://localhost/lunchapp');