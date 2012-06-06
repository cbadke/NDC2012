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
	socket.on('message', function(rawData) {
		console.log('new message ' + rawData);

		var data = JSON.parse(rawData);

		if (data.type === "say"){
			sockets.forEach(function(sock) {

				if(sock !== socket) {
					sock.send(socket.user + " - " + data.message);
				}
			});
		} else if (data.type === "login"){
			socket.user = sockets.length;
			console.log("user logged in: " + socket.user);
		} else if (data.type === "leave"){
			console.log("user left: " + socket.user);
			sockets.forEach(function(sock) {
				if(sock !== socket) {
					sock.send("user " + socket.user + " has left");
				}
			});
			socket.close();
		}

	})
	.on('close', function() {
		console.log('connection closed');

		var i = sockets.indexOf(socket);
		if(i != -1) {
			sockets.splice(i,1);
		}
	});
});


