var connect = require('connect');
var ws = require('websocket.io');

var sockets = [];

var port = process.env.PORT || 8000;
console.log('Starting server on port ' + port);

var server = connect()
	.use(connect.logger())
	.use(connect.directory(__dirname + '/public'))
	.use(connect.static(__dirname + '/public'))
	.listen(port);

ws.attach(server).on('connection', function(socket) {
	sockets.push(socket);
	socket.on('message', function(data) {
		console.log('new message ' + data);

		sockets.forEach(function(socket) {
			socket.send(data);
		});
	})
	.on('close', function() {
		console.log('connection closed');

		var i = sockets.indexOf(socket);
		if(i != -1) {
			sockets.splice(i,1);
		}
	});
});


