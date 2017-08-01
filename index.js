var express = require('express');
require('babel-register');


const app = require('./src/app').app,
      PORT = process.env.PORT || 3000;
 

app.listen(PORT, function() {
  console.log('Request Header Parser - Server is listening on port ' + PORT);
});
