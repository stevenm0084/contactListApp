var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactlist', ['contactlist']);

var PORT_NUM = 3000

/*app.get('/', function (request, response){
	response.send("Hello world from server.js");
});*/
app.use(express.static(__dirname + "/public"));

app.get('/contactlist', function (request, response){
	console.log("I received a GET request");

	db.contactlist.find(function (err, docs) {
		console.log(docs);
		response.json(docs);
	});
})

app.listen(PORT_NUM);
console.log("server running on port 3000");