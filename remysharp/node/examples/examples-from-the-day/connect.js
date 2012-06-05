var connect = require('connect');
var ctr = 0;

function routes(app) {
  app.get('/names/:name', function (req, res, next) {
    console.log(req.params.name);
    next();
  });
}

connect.createServer(
  connect.favicon(),
  connect.router(routes),
  function (req, res, next) {
    console.log("I'm after the router: " + ctr);
    next();
  },
  connect.directory(__dirname),
  connect.static(__dirname)
).listen(process.env.PORT || 8000);
