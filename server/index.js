const express = require('express');
const bodyParser = require('body-parser');
const https = require("https");
var cors = require('cors')
const key = 'bdcd5edebb0e8258c08a3e4aa964e072';

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
  let body = "";
  let zip = req.query['zip']
  let url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=imperial&APPID=${key}`
  https.get(url, httpRes => {
      httpRes.setEncoding("utf8");
      httpRes.on("data", data => {
        body += data;
      });
      httpRes.on("end", () => {
        res.send(body.toString('utf8'))
      })
    });
});

//gets 5 day forecast
app.get('/api/forecast', (req, res) => {
  let body = "";
  let zip = req.query['zip']
  let url = `https://api.openweathermap.org/data/2.5/forecast?zip=${zip}&units=imperial:&APPID=${key}`
  https.get(url, httpRes => {
      httpRes.setEncoding("utf8");
      httpRes.on("data", data => {
        body += data;
      });
      httpRes.on("end", () => {
        res.send(body.toString('utf8'))
      })
    });
});

//lets you know server is up an running on port 3000
app.listen(3000, () =>
  console.log('Express server is running on localhost:3000')
);
   