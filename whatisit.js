// request header parser microservice
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('woo-hoo');
});

app.listen(8080, function () {
  console.log('app listening on port 8080');
});