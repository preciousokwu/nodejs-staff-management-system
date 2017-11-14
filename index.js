var express=require("express")
var app=express();

app.get("/",function(req,res){
        res.send("Welcome to Landing Page");
}).listen(3005,function(){
    console.log("Listening to Port 3005")
});