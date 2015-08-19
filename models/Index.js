var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tripPlanner');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error:'));


var Schema = mongoose.Schema;

var PlaceSchema = new Schema ({
  address: String,
  city: String,
  state:   String,
  phone:   String,
  location: [Number],
});

var HotelSchema = new Schema ({
  name: String,
  place: String,
  num_stars: {type: Number, min: 1, max: 5},
  amenities: String
});


var ActivitySchema = new Schema ({
  name: String,
  place: String,
  age_range: String
});

var RestaurantSchema = new Schema ({
  name: String,
  place: String,
  cuisines: String,
  price: {type: Number, min: 1, max: 5}
});

var Place = mongoose.model('Place', PlaceSchema);
var Hotel = mongoose.model('Hotel', HotelSchema);
var Activity = mongoose.model('Activity', ActivitySchema);
var Restaurant = mongoose.model('Restaurant', RestaurantSchema);

module.exports = {
  Place: Place,
  Hotel: Hotel,
  Activity: Activity,
  Restaurant: Restaurant
};