var express = require("express");

var app = express();

app.get("/", function(req, res){
  res.send("Hi there, welcome to my assignment");
});

app.get("/speak/pig", function(req, res){
  res.send("The pig says \'Oink\'");
});

app.get("/speak/cow", function(req, res){
  res.send("The cow says \'Moo\'");
});
app.get("/speak/dog", function(req, res){
  res.send("The dog says\'Woof Woof!\'");
});
app.get("/repeat/:word/:num", function(req, res){
  var ans= "";
  for(var i = 0; i < Number(req.params.num); i++)
  {
    ans += req.params.word + " ";
  }
  res.send(ans);
});

app.get("*", function(req, res){
  res.send("Sorry, page not found...What are you doing with your life?");
});

app.listen(3000, function(){
  console.log("server started!");
});
