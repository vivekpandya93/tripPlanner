var express = require('express');
var router = express.Router();
var Promise = require('bluebird');

require('../models/Index');
var Hotel = require('mongoose').model('Hotel');
var Activity = require('mongoose').model('Activity');
var Restaurant = require('mongoose').model('Restaurant');


/* GET home page. */
router.get('/', function(req, res, next) {
  var hotelPromise = Hotel.find();
  var activityPromise = Activity.find();
  var restaurantPromise = Restaurant.find();
  Promise.all([hotelPromise, activityPromise, restaurantPromise]).then(function(data){
         res.render('index', {hotels: data[0], activities: data[1], restaurants: data[2]});
  });
});

module.exports = router;
