var path = require("path"),
    express = require("express"), // Adds express to the server side (after an npm install express --save)
    _ = require("underscore"), // Adds underscore to the server side (after an npm install underscore --save),
    database = require("./playerDatabase.js");

var app = express()
            .use(express.static(__dirname,
                                path.join(__dirname, "bower_components"),
                                path.join(__dirname, "js")));
            app.use(express.urlencoded());
            app.use(express.json());

var db = database.playerDatabase;

app.get("/players", function(req, res){
    res.json(db);
});

var id = _.max(db, function(x){ return x.id; }).id;

var getId = function(){
    return ++id;
};

// app.get("/players/:id", function(req, res){
//     res.json(db);
// });

app.post("/players", function(req, res){
    req.body.id = getId();
    db.push(req.body);
});

app.get("/battle/", function(req, res){
    res.json(db);
});

var port = process.env.PORT || 3000;
app.listen(port);
console.log("Started server on port " + port);