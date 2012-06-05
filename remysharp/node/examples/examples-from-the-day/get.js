var http = require('http'),
    url = require('url');

http.request(url.parse('http://2011.full-frontal.org/schedule'), function (res) {
  var html = '';
  res.on('data', function (chunk) {
    html += chunk.toString();
  }).on('end', function () {
    debugger;
  });
}).end();

