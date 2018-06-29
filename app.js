var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var PORT = process.env.PORT || 8080;

app.set('view engine', 'ejs');
app.use (bodyParser.urlencoded({extended: true}));

var campgrounds = [
  {name: 'Salmon Creek', image: ""},
  {name: 'Granite Hill',image: "https://pixabay.com/get/e83db7082af3043ed1584d05fb1d4e97e07ee3d21cac104496f0c179afeeb7bb_340.jpg"},
  {name: 'Mountain Goat', image: "https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104496f0c179afeeb7bb_340.jpg"}
]

app.get('/', function(req, res) {
  res.render('landing');

});

app.get('/campgrounds', function(req, res) {
  res.render('campgrounds', {campgrounds: campgrounds})
});

app.get('/campgrounds/new', function (req, res) {
  res.render('new.ejs')
});

app.post('/campgrounds', function(req, res) {
  var name = req.body.name
  var image = req.body.image;
  var newCampground = {name: name, image: image}
  campgrounds.push(newCampground)
  //get data from form and add to campground array
  // redirect back to campgrounds page
  res.redirect('/campgrounds')
});



app.listen(PORT, () => {
  console.log(`YelpCamp server listening on port ${PORT}!`);
});
