// request header parser microservice
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  var ip = req.headers;
  var lang = ip['accept-language'];
  var addy = ip['x-forwarded-for'];
  var soft = ip['user-agent'];
  
  var all = {
    'language': lang,
    'ipaddress': addy,
    'software': soft
    
  };
  res.send(all);
});

app.listen(8080, function () {
  console.log('app listening on port 8080');
});