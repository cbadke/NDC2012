var http = require('http');

var server = http.createServer( function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});

	if (req.url === '/') {
		res.write('home page!');
	} else if (req.url === '/hello') {
		res.write('hello world');
	} else {
		res.write('i dont understand');
	}
	res.end();

});

server.listen(8000);
