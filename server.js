
var express    = require("express");
var app = express();


var mysql      = require('mysql');
var connection = mysql.createConnection({
  	host: '10.3.0.195',
    user: 'frankjq108',
    password: 'polman23',
    database: 'frankjq108_data'
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
});

app.use(express.static('public'));
