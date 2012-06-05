var connect = require('connect');

var port = process.env.PORT || 8000;
console.log('Starting server on port ' + port);

var routes = function (app) {
	app.get('/bob', function(req, res, next) {
		console.log('hello bob');
		res.writeHead(200, {'content-type': 'text/html'});
		res.end('hello bob');
	})
};

var server = connect()
	.use(connect.logger())
	.use(connect.favicon())
	.use(connect.directory(__dirname + '/public'))
	.use(connect.static(__dirname + '/public'))
	.use(connect.router(routes))
	.listen(port);


