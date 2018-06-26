var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('landing');

});

app,get('/campgrounds', function(req, res) {
  var campgrounds = [
    {name: 'Salmon Creek', image: "https://pixabay.com/get/e83db50a21f4073ed1584d05fb1d4e97e07ee3d21cac104496f0c179afeeb7bb_340.jpg"},
    {name: 'Granite Hill',image: "https://pixabay.com/get/e83db50a21f4073ed1584d05fb1d4e97e07ee3d21cac104496f0c179afeeb7bb_340.jpg"},
    {name: 'Mountain Goat', image: "https://pixabay.com/get/e83db50a21f4073ed1584d05fb1d4e97e07ee3d21cac104496f0c179afeeb7bb_340.jpg"}
  ]
})



app.listen(PORT, () => {
  console.log(`YelpCamp server listening on port ${PORT}!`);
});
