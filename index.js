var express=require("express");
var app=express();

app.get("/",function(req,res){
        res.send("Welcome to Landing Page");
}).listen(3006,function(){
    console.log("Listening to Port 3006")
});


app.get("/dashboard",function(req,res){
        res.send("Welcome to Dashboard Page");
});