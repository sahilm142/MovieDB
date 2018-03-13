var express = require("express");
var app = express();
var request = require("request");

app.set("view engine","ejs");
app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("search");      
});
var title = "";
app.get("/results", function(req, res){
    var query = req.query.search;
   // console.log(query);
    
    var url = "http://omdbapi.com/?s="+query+"&apikey=YOUR_KEY"; 
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            var parsedData = JSON.parse(body);
            res.render("results", {parsedData: parsedData, title: title});            
        }
    });
});

app.get("/movies", function(req, res){
    //res.send("hi");
    var query = title;
    console.log(query);
    
    var url = "http://omdbapi.com/?t="+"Batman"+"&apikey=YOUR_KEY";
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            var parsedData = JSON.parse(body);
            res.render("movies", {parsedData: parsedData});            
        }
    });
});

app.listen(3004, function(){
    console.log("Connected");    
});