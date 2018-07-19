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
  image: String,
  description: String
});

var Campground = mongoose.model('Campground', campgroundSchema)
// Campground.create(
//   {
//     name: 'Granite Hill',
//     image: "https://farm6.staticflickr.com/5592/14940388216_2d72964061.jpg",
//     description: 'This is a huge granite hill, no bathrooms, no water. Sweet beach though!'
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
      res.render('index', {campgrounds: allCampgrounds})

    }
  });
});

app.get('/campgrounds/new', function (req, res) {
  res.render('new.ejs')
});

app.get('/campgrounds/:id', function (req, res) {
  //find campground with provided id
  Campground.findById(req.params.id, function(err, foundCampground) {
    if(err){
      console.log('Error')
    } else {
      //render show template with that campground
      res.render('show', {campground: foundCampground})
    }
  });
});

app.post('/campgrounds', function(req, res) {
  var name = req.body.name
  var image = req.body.image;
  var desc = req.body.description
  var newCampground = {name: name, image: image, description: desc  }
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
