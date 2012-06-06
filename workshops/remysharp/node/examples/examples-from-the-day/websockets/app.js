var ws = require('websocket.io'),
    connect = require('connect'),
    app = connect(),
    socketServer = ws.attach(app),
    sockets = [];

app.use(connect.static('.')).listen(3000);

socketServer.on('connection', function (socket) {
  sockets.push(socket);
  socket.on('message', function (data) {
    console.log('message in', data);
    sockets.forEach(function (sock) {
      if (socket !== sock) sock.send(data);
    });
  });
  socket.on('close', function () {
    var i = sockets.indexOf(socket);
    if (i !== -1) {
      sockets.splice(i, 1);
    }
  });
});
