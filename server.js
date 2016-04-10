var express = require('express');
var app = express();

app.use(express.static(__dirname + '/static'));
app.use('/node', express.static(__dirname + '/node/views'));
app.use('/public', express.static(__dirname + "/node/public"));

app.use(function(req,res){
    res.sendfile(__dirname + '/static/404.html');
});

app.listen(3000)
