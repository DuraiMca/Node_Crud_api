const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.all('*',function(req,res,next){
	res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'OPTIONS,GET,POST,PUT,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
})

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/post", function(req, res){
    console.log("Post")
    return res.send("Post pinging");
});

app.get("/", function(req, res){
    console.log("Get")
    return res.send("Get pinging");
});


http.createServer(app).listen(app.get('port'), function(){
        console.log("server is running ...");
});