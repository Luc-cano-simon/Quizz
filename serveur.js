var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mysql = require('mysql');
// var validate = require("validate.js")


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public')); // fonction pour relier le HTML 

app.get('/', function (req, res) {
	res.send()
})

app.listen(3000, function () 
{	
	console.log('c est bon tu est connecté au serveur 8080');
})


// création de la relation serveur et BDD


var connection = mysql.createConnection(
{   
	host: 'localhost',
	user: 'luc',
	password: '',
	database: 'Quizz'
})

var arrayQ = [];

connection.connect(function(err) 
{
	if (err) throw err
		console.log('Good, tu es connecté à la BDD')

	connection.query('SELECT * FROM Questionnaire', function(err, results) {
		if (err) throw err
			for (var i =0; i < results.length; i++) 
			{
				arrayQ.push(results[i]);
			}

			console.log(arrayQ);
		})

})

app.get('/question', function (req, res) {
	res.json(arrayQ);
	console.log(arrayQ);
})
