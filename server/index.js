const express = require('express');
const bodyParser = require('body-parser');
const https = require("https");
var cors = require('cors')

const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));

/*
ROUTES
For a simple application like this I've put routes into the server index file, 
however in a larger project structure the routes would be its own separate folders, with files 
or with possible sub folders containing their related files
*/


// gets current weather forecast for current location
app.get('/api/current', (req, res) => {
//TODO
});

//gets 5 day forecast
app.get('/api/forecast', (req, res) => {
    //TODO
});

//lets you know server is up an running on port 3000
app.listen(3000, () =>
  console.log('Express server is running on localhost:3000')
);
   