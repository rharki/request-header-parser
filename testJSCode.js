var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;  //set the port that the project will use


app.get('/hello', function(request, response) {
  console.log(request.headers);
  response.end("hello");
});
 

app.listen(PORT, function() {
  console.log('Request Header Parser - Server is listening on port ' + PORT);
});
