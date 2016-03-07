
/*

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'example.org',
  user     : 'bob',
  password : 'secret',
});

connection.connect(function(err) {
  // connected! (unless `err` is set)
});

*/

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());


var mysql = require('mysql');
function getConnection() {
  var connection = mysql.createConnection({
    host: '10.3.0.195',
    user: 'frankjq108_frank',
    password: 'polman23',
    database: 'frankjq108_todo'
  });
  return connection;

  alert("connection");
}

app.listen(3000, function () {
  console.log('inlog functie on port 3000');
});

app.use(express.static('public'));