// server.js
// where your node app starts

// init project
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const useragent = require('express-useragent');
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(useragent.express());
app.use(express.static('public'))

var api = '/api/whoami';

app.get(api, function(req, res, next){
var language = req.acceptsLanguages();
var software = "OS :" + req.useragent.os + ",  Browser: " + req.useragent.browser;
var ipaddress = req.ip;
  
  res.json({'ipaddress': ipaddress, 'language': language[0], 'software': software});
});


const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})
