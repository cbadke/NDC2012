var http = require('http');
var url = require('url');

var options = url.parse('http://2011.full-frontal.org/schedule');


var req = http.request(options, function(res) {
	console.log('STATUS: ' + res.statusCode);
	console.log('HEADERS: ' + JSON.stringify(res.headers));
	res.setEncoding('utf8');
	var bodyText = "";

	res.on('data', function (chunk) {
		bodyText += chunk;
	});
	res.on('end', function(e) {
		debugger;
		console.log(bodyText);
		console.log(bodyText.substr(6175, 5));
	});
});

req.on('error', function(e) {
	console.log('problem with request: ' + e.message);
});


// write data to request body
// req.write('data\n');
// req.write('data\n');
req.end();
