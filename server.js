
var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());


// connectie maken met de sql database
var mysql = require('mysql');
function getConnection() {
  var connection = mysql.createConnection({
  	host: 'localhost',
    user: 'root',
    database: 'travel_data'
  });
  return connection;

  alert("connection");
}


// query waarmee ik database getest heb
/* 
connection.query('SELECT * from gebruikers', function(err, rows, fields) {
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.');
});
*/

// alle querys zijn uitgevoerd voordat de er een quit bericht 
// gestuurd wordt naar mysql
//connection.end();

app.listen(3000, function () {
  console.log('inlog functie on port 3000');
});

app.use(express.static('public'));


// post user naar database
app.post('/user/create', function(req, res){

  var connection = getConnection();
  connection.connect();
  var gebruiker = {id: 0, naam: req.body.username};

  var query = connection.query('insert into gebruikers set ?', gebruiker, function (err, result) {
      if (err) {
       console.error(err);
       return res.send(err);
     } else {
       return res.send('Ok');
     }

    });
    connection.end();
}); 

// post land naar database
app.post('/add/land', function(req, res){

  var connection = getConnection();
  connection.connect();
  var newLand = {id: 0, landnaam: req.body.land};

  var query = connection.query('insert into landen set ?', newLand, function (err, result) {
      if (err) {
       console.error(err);
       return res.send(err);
     } else {
       return res.send('Ok');
     }

    });
    connection.end();
}); 


//laden van de landenlijst
app.get('/landen', function(req, res) {
  var connection = getConnection();
  connection.connect();
  connection.query('SELECT * from landen', function(err, rows, fields) {
    if (!err) {
      //console.log(rows);
      res.send(JSON.stringify(rows));
    }
    else {
      console.log('Error while performing Query.');
    }
  });
  connection.end();
});




