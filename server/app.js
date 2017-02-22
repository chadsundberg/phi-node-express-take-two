console.log('starting up the server');

var express = require('express');  // this path defaults to the node modules folder and finds it
var app = express();
var bodyParser = require('body-parser'); // this is also required to use req.body

app.use(express.static('server/public')); // checks to see if this request is a request for a static file
// server/public is where our static files live

app.use(bodyParser.urlencoded({extended: true})); // this creates req.body

var fishiesList = [{name:'walleye'}, {name: 'pike'}, {name: 'muskie'}];

app.get('/fish', function(req, res) {  // node has already created this req and res object
    // res.send is necessary to always give a response from the server.
  res.send(fishiesList);
});

app.get('/fish/first', function(req, res) {  // node has already created this req and res object
    // res.send is necessary to always give a response from the server.
  res.send(fishiesList[0]);
});

// handle the request for the first fish
app.get('/fish/first', function(req, res){
  res.send(fishiesList[0]);
});

// create a new route for last fishiesList

app.get('/fish/last', function(req, res){
  // var lastIndex = fishiesList.length - 1;
  // res.send(fishiesList[lastIndex]);
  res.send(fishiesList[fishiesList.length - 1]);
});

//handle request for the name of the last fish

app.get('/fish/last/name', function(req, res) {
  var lastIndex = fishiesList.length - 1;
  res.send(fishiesList[lastIndex].name);

});

app.get('/fish/first/name', function(req, res) { // every http request needs req, res inside the function parameters
  // var lastIndex = fishiesList;
  res.send(fishiesList[0].name);

});

app.post('/fish/new', function(req, res){  // this is the syntax for app.post
  var newFish = req.body;  //data() on the client side become req.body here.
  fishiesList.push(newFish);
  res.sendStatus(200);  // success message
});




app.listen(5000);
