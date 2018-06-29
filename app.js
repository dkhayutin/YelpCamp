var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var PORT = process.env.PORT || 8080;

app.set('view engine', 'ejs');
app.use (bodyParser.urlencoded({extended: true}));

var campgrounds = [
  {name: 'Salmon Creek', image: "https://farm3.staticflickr.com/2524/3875579827_d74d424902.jpg"},
  {name: 'Granite Hill',image: "https://farm6.staticflickr.com/5592/14940388216_2d72964061.jpg"},
  {name: 'Mountain Goat', image: "https://farm5.staticflickr.com/4150/4832531195_9a9934b372.jpg"},
  {name: 'Salmon Creek', image: "https://farm3.staticflickr.com/2524/3875579827_d74d424902.jpg"},
  {name: 'Granite Hill',image: "https://farm6.staticflickr.com/5592/14940388216_2d72964061.jpg"},
  {name: 'Mountain Goat', image: "https://farm5.staticflickr.com/4150/4832531195_9a9934b372.jpg"},
  {name: 'Salmon Creek', image: "https://farm3.staticflickr.com/2524/3875579827_d74d424902.jpg"},
  {name: 'Granite Hill',image: "https://farm6.staticflickr.com/5592/14940388216_2d72964061.jpg"},
  {name: 'Mountain Goat', image: "https://farm5.staticflickr.com/4150/4832531195_9a9934b372.jpg"}

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
