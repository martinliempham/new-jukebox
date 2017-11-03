// server.js
var express = require('express')
var app = express()


app.get('/', function(request, response){
	response.sendFile('index.html')
	})
 };


app.listen(process.env.PORT || 3000, function() {
  console.log("Your server is available at localhost:3000!");
 });

app.get('*', function(request, response){
  response.status(404).send('page not found')
})
