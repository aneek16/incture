var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/mongotest';
var app = express();
app.listen(3002)

app.get('/insert', function(req, res, next) {

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        db.collection('games').insertMany([

                {
                    "name": "COD",
                    "genre": "Action",
                    "rating": 98
                }, {
                    "name": "AOE",
                    "genre": "Strategy",
                    "rating": 95
                }, {
                    "name": "MOH",
                    "genre": "Acton",
                    "rating": 99
                }, {
                    "name": "GTA",
                    "genre": "Open World",
                    "rating": 90
                }, {
                    "name": "FIFA",
                    "genre": "Sports",
                    "rating": 92
                }
            ],

            function(err, result) {
                if (err) throw err;
                console.log("Inserted a document into the games collection.");

            });
    });
});

app.get('/getalldata', function(req, res, next) {

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var arr = [];
        console.log("Hi all")
        db.collection('games').find({}).toArray(function(err, doc) {
            if (err) throw err;
            console.log(doc);
        });
        return arr;
    })
})

app.get('/getcoddata', function(req, res, next) {

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var arr = [];
        console.log("Hi all")
        db.collection('games').find({name:"COD"}).toArray(function(err, doc) {
            if (err) throw err;
            console.log(doc[0]);
        });
        return arr;
    })
})
app.get('/get3data', function(req, res, next) {

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var arr = [];
        console.log("Hi all")
        db.collection('games').find({}).sort({ "rating": -1 }).limit(3).toArray(function(err, doc) {
            if (err) throw err;
            console.log(doc);
        });
        return arr;
    })
})
app.get('/getexistsdata', function(req, res, next) {

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var arr = [];
        console.log("Hi all")
       db.collection('games').find({achievements:{$exists:true}}).toArray(function(err, doc) {
            if (err) throw err;
            console.log(doc);
        });
        return arr;
    })
})
