
var express = require("express");
var app = express();
var bodyParser = require('body-parser');


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


// post data naar database
app.post('/user/create', function(req, res){

  var connection = getConnection();
  connection.connect();

  var gebruikers = req.body;

  console.log(gebruikers);
  console.log(gebruikers);

  console.log('request received:', req.body);

  var query = connection.query('insert into gebruikers set ?', gebruikers, function (err, result) {
      if (err) {
       console.error(err);
       return res.send(err);
     } else {
       return res.send('Ok');
     }

      //console.log("new user");
      //res.status(200).end();
    });
    connection.end();
}); 


