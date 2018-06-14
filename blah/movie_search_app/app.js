var express = require("express");
var app = express();
var request = require("request");

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("search");
});

app.get("/results", function(req, res){
    request('http://www.omdbapi.com/?apikey=89b511e2&s=' + req.query.search, function(error, response, body){
        if(!error && response.statusCode == 200)
        {
            res.render("results", {data: JSON.parse(body) });
        }
    });
});

app.listen(8080, function(){
  console.log("Using port 8080 here\n Movies app has started");
});
