
var express = require("express");
var app = express();
var bodyParser = require('body-parser');


// connectie maken met de sql database
var mysql = require('mysql');
var connection = mysql.createConnection({
  	host: 'localhost',
    user: 'root',
    database: 'travel_data'
});

connection.connect();

connection.query('SELECT * from gebruikers', function(err, rows, fields) {
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.');
});

connection.end();



app.listen(3000, function () {
  console.log('inlog functie on port 3000');

  console.log('testke');

});

app.use(express.static('public'));
