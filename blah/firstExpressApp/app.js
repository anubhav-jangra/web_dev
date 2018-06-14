var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var request = require("request");

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){ //request and response
    res.render("home");
});

app.get("/fellinlovewith/:thing", function(req, res){ //request and response
    var thing = req.params.thing;
    //res.send(thing);
    res.render("love", {thingVar: thing});
});

app.post("/addfriend", function(req, res){ //request and response
    console.log(req.body);
  // res.send("YOU HAVE REACHED POST ROUTE!");
    res.redirect("/");
});

//
// app.get("*", function(req, res){
//   res.send("YOU ARE A STAR!!");
// });

request('http://www.omdbapi.com/?s=star&', function(error, response, body){
    if(!error && response.statusCode == 200)
    {
        console.log(JSON.parse(body));  //show html for google home page
    }
});

app.listen(8080, function(){
  console.log("Using port 8080 here");
});
