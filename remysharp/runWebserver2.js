var connect = require('connect');

var port = process.env.PORT || 8000;
console.log('Starting server on port ' + port);

var server = connect()
	.use(connect.logger())
	.use(connect.favicon())
	.use(connect.directory(__dirname + '/public'))
	.use(connect.static(__dirname + '/public'))
	.listen(port);


