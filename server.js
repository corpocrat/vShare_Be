var express = require("express");
var app = express();

var user = [{name: 'Gaurav',email:'abc@xyz.com',country:'Canada',password:'1234'},
            {name: 'Gaurav1',email:'abc1@xyz.com',country:'Canada',password:'1234'}];

app.use((req,res,next) =>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Origin", "Origin, X-Requested-With, Content-Type,Accept");
    next();
})

app.get('/login',(req,res) => {
    //res.send("My App");
    res.json(user);
})



app.listen(1234);
