var path = require("path"),
    express = require("express"), // Adds express to the server side (after an npm install express --save)
    _ = require("underscore"), // Adds underscore to the server side (after an npm install underscore --save),
    database = require("./playerDatabase.js");

var app = express()
            .use(express.static(__dirname,
                                path.join(__dirname, "bower_components"),
                                path.join(__dirname, "js")))
            .use(express.bodyParser()); // This is causing the warning in Forego

var db = database.playerDatabase;

app.get("/players", function(req, res){
    res.json(db);
});

var id = _.max(db, function(x){ return x.id; }).id;

var getId = function(){
    return ++id;
};

app.post("/login", function(req, res){
    req.body.id = getId();
    db.push(req.body);
    res.end();
    console.log('test log');
});

var port = process.env.PORT || 3000;
app.listen(port);
console.log("Started server on port " + port);