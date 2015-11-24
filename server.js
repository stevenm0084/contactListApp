var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactlist', ['contactlist']);
var bodyParser = require('body-parser');

var PORT_NUM = 3000;

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/contactlist', function (request, response) {
    console.log("I received a GET request");

    db.contactlist.find(function (err, docs) {
        console.log(docs);
        response.json(docs);
    });
});

app.post('/contactlist', function (request, response) {
    console.log('I receive a post request');

    console.log(request.body);
    db.contactlist.insert(request.body, function (err, docs) {
        response.json(docs);
    });
});

app.delete('/contactlist/:id', function (request, response) {
    var id = request.params.id;
    console.log(id);
    db.contactlist.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
             response.json(doc);
    });
});


app.listen(PORT_NUM);
console.log("server running on port 3000");