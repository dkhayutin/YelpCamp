var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/yelp_camp')

var PORT = process.env.PORT || 8080;

app.set('view engine', 'ejs');
app.use (bodyParser.urlencoded({extended: true}));

//SCHEMA SETUP

var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String
});

var Campground = mongoose.model('Campground', campgroundSchema)
// Campground.create(
//   {
//     name: 'Granite Hill',
//     image: "https://farm6.staticflickr.com/5592/14940388216_2d72964061.jpg"
// }, function(err, campground) {
//   if(err) {
//     console.log('Error')
//   } else {
//     console.log('Newly Created Campground')
//     console.log(campground)
//   }
// })

app.get('/', function(req, res) {
  res.render('landing');

});

app.get('/campgrounds', function(req, res) {
  Campground.find({}, function (err, allCampgrounds) {
    if(err) {
      console.log('Error')
    } else {
      res.render('campgrounds', {campgrounds: allCampgrounds})

    }
  });
});

app.get('/campgrounds/new', function (req, res) {
  res.render('new.ejs')
});

app.post('/campgrounds', function(req, res) {
  var name = req.body.name
  var image = req.body.image;
  var newCampground = {name: name, image: image}
  // create a new campground and save to database
  Campground.create(newCampground, function (err, newlyCreated) {
    if(err){
      console.log('Error')
    } else {
      // redirect back to campgrounds page
      res.redirect('/campgrounds')
    }
  });
});



app.listen(PORT, () => {
  console.log(`YelpCamp server listening on port ${PORT}!`);
});
