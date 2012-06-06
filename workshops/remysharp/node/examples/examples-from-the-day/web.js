var http = require('http');

var server = http.createServer(function (req, res) { 
  var body = 'hello world';
  debugger;
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  res.end('you said nothing');
});

server.listen(8000);
