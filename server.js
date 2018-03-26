// server.js
// where your node app starts

// init project
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'))

var api = '/api/whoami';

app.get(api, function(req, res, next){
var language;
var software;
var
});


const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})
