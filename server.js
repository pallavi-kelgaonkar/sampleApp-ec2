var app = require('express')();

app.use('/', function(req, res){
	res.send("Hello World, Successfully deployed app on Amazon.");
});

app.listen(8000, function(){
	console.log("server listening on Port:-8000");
});
