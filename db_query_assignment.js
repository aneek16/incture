var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/mongotest';
var insertDocument = function(db, callback) {
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
            console.log("Inserted a document into the movies1 collection.");
            callback();
        });
};
var findallmovies = function(db, callback) {
    var arr = [];
    console.log("Hi all")
    db.collection('games').find().toArray(function(err, doc) {
        if (err) throw err;
        console.log(doc[0]);
    });
    return arr;
};
var findmovies = function(db, callback) {
    var arr = [];
    console.log("Hi  COD ")
    db.collection('games').find({ "name": "COD" }).toArray(function(err, doc) {
        if (err) throw err;
        console.log(doc[0]);
    });
    return arr;
};
var findmovies3 = function(db, callback) {
    var arr = [];
    console.log("Hi 3 High ratings")
    db.collection('games').find({}).sort({ "rating": -1 }).limit(3).toArray(function(err, doc) {
        if (err) throw err;
        console.log(doc[0]);
    });
    return arr;
};
var updatemovies = function(db, callback) {
    db.collection('games').updateMany({ name: "AOE" }, { $set: { achievements: ["speed demon", "master"] } }, { upsert: true }, function(err, results) {
        console.log(results);
        callback();
    });
};
var findexists = function(db, callback) {
    var arr = [];
    console.log("Hi 3 High ratings")
    db.collection('games').find({achievements:{$exists:true}}).toArray(function(err, doc) {
        if (err) throw err;
        console.log(doc[0]);
    });
    return arr;
};
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    insertDocument(db, function() {
        console.log("Here")
            //db.close();
    });
    findmovies(db, function() {
        console.log("Here Find selected movies")

    });
    findallmovies(db, function() {
        console.log("Here Find all movies")

    });
    findmovies3(db, function() {
        console.log("Here Find 3 movies")

    });
    updatemovies(db, function() {
        console.log("Here Update movies")
    });
    findexists(db, function() {
        console.log("Here achievements movies")
    });
});
