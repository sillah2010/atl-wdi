const express = require('express');
const app = express();
const port = 3000;

app.listen(port, function(){
    console.log("==========================")
    console.log('LISTENING ON PORT ' + port);
    console.log("==========================")
  });