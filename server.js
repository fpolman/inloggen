
// Dependencies toevoegen
var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
app.use(bodyParser.json());


// Connectie maken met de sql database
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

//Server opzetten
app.listen(3000, function () {
  console.log('inlog functie on port 3000');
});

app.use(express.static('public'));


//Functies voor communicatie database

// Post user naar database
app.post('/user/create', function(req, res){

  var connection = getConnection();
  connection.connect();
  var gebruiker = {
    idgebruiker: 0, 
    gebruikersnaam: req.body.gebruikersnaam,
    voornaam: req.body.voornaam,
    achternaam: req.body.achternaam,
    geboortedatum: req.body.geboortedatum
  };

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

// update user naar database
app.post('/user/update', function(req, res){

  var connection = getConnection();
  connection.connect();

  var gebruiker = {
    gebruikersnaam: req.body.gebruikersnaam,
    voornaam: req.body.voornaam,
    achternaam: req.body.achternaam,
    geboortedatum: req.body.geboortedatum
  };

  console.log(gebruiker);

  var query = connection.query('update gebruikers set ? WHERE idgebruiker = 1', gebruiker, function (err, result) {
      if (err) {
       console.error(err);
       return res.send(err);
     } else {
       return res.send('Ok');
     }

    });
    connection.end();
}); 

// Post land naar database
app.post('/add/land', function(req, res){

  var connection = getConnection();
  connection.connect();
  var newLand = {id: 0, landnaam: req.body.naam};

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

// Laden van de landenlijst
app.get('/Toplanden', function(req, res) {
  var connection = getConnection();
  connection.connect();
  connection.query('SELECT * from topLanden', function(err, rows, fields) {
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

// Laden van de landenlijst
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

// Laden van de singleLand
app.get('/landID/:id', function(req, res) {
  var connection = getConnection();
  connection.connect();

  var id = req.params.id;
  console.log(id);

  connection.query('SELECT * from landen WHERE id = ? ', id, function(err, rows, fields) {
    if (!err) {
      console.log(rows);
      res.send(JSON.stringify(rows));
    }
    else {
      console.log('Error while performing Query.');
    }
  });
  connection.end();
});


// Laden van de singleLand
app.get('/activities/:id', function(req, res) {
  var connection = getConnection();
  connection.connect();

  var id = req.params.id;
  console.log(id);

  connection.query('SELECT * from activiteiten WHERE landen_id = ? ', id, function(err, rows, fields) {
    if (!err) {
      console.log(rows);
      res.send(JSON.stringify(rows));
    }
    else {
      console.log('Error while performing Query.');
    }
  });
  connection.end();
});

// Laden van de user
app.get('/user', function(req, res) {
  var connection = getConnection();
  connection.connect();
  connection.query('SELECT * from gebruikers WHERE idgebruiker = 1', function(err, rows, fields) {
    if (!err) {
      console.log(rows);
      res.send(JSON.stringify(rows));
    }
    else {
      console.log('Error while performing Query.');
    }
  });
  connection.end();
});


//laden van visitedCountries van de user
app.get('/visitedCountries', function(req, res) {
  var connection = getConnection();
  connection.connect();
  connection.query('SELECT * from gebruikerslanden WHERE idgebruiker = 1', function(err, rows, fields) {
    if (!err) {
      console.log(rows);
      res.send(JSON.stringify(rows));
    }
    else {
      console.log('Error while performing Query.');
    }
  });
  connection.end();
});

// Post land naar database
app.post('/addVisitedCountry', function(req, res){

  var connection = getConnection();
  connection.connect();
  var newLand = {
    idgebruikerslanden: 0,
    landnaam: req.body.landnaam,
    omschrijving: req.body.omschrijving,
    idgebruiker: 1
  };

  var query = connection.query('insert into gebruikerslanden set ?', newLand, function (err, result) {
      if (err) {
       console.error(err);
       return res.send(err);
     } else {
       return res.send('Ok');
     }

    });
    connection.end();
}); 

app.delete('/visitedCountry/:id', function(req, res) {
  var id = req.params.id;
  var connection = getConnection();
  connection.connect();
  connection.query('DELETE from gebruikerslanden where idgebruikerslanden = ?', id,  function(err, rows, fields) {
    console.log('deleted ' + id);
    res.status(200).end();
  });
  connection.end();
});


// Laden van de singleLand
app.get('/recenties/:id', function(req, res) {
  var connection = getConnection();
  connection.connect();

  var id = req.params.id;
  console.log(id);

  connection.query('SELECT * from recenties WHERE landenid = ? ', id, function(err, rows, fields) {
    if (!err) {
      console.log(rows);
      res.send(JSON.stringify(rows));
    }
    else {
      console.log('Error while performing Query.');
    }
  });
  connection.end();
});

// Post recentie naar database
app.post('/recentie', function(req, res){

  var connection = getConnection();
  connection.connect();
  var recentie = {
    landenid: 1,
    idgebruiker: 1,
    gebruikersnaam: req.body.gebruikersnaam,
    naamActiviteit: req.body.activiteitenNaam,
    omschrijving: req.body.omschrijving
  };

  var query = connection.query('insert into recenties set ?', recentie, function (err, result) {
      if (err) {
       console.error(err);
       return res.send(err);
     } else {
       return res.send('Ok');
     }

    });
    connection.end();
}); 

// Laden van de recenties
app.get('/recenties', function(req, res) {
  var connection = getConnection();
  connection.connect();
  connection.query('SELECT * from recenties', function(err, rows, fields) {
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




