var express = require('express'),
  path = require('path'),
  opn = require('opn'),
  app = express(),
  port=8889;
 app.use(express.static(path.join(__dirname,'../','dist')));
 app.listen(port, function() {
     console.log('Server running on port: ' + port);
     opn('http://localhost:' + port);
 });
return 1;
