var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  var parseUrl = url.parse(req.url, true);
  res.writeHead(200, { 'Content-Type': 'application/json' });
  if (parseUrl.pathname == '/api/parsetime') {
    var d1 = new Date(parseUrl.query.iso);
    var obj1 = { 'hour': d1.getHours(), 'minute': d1.getMinutes(), 'second': d1.getSeconds() };
    res.end(JSON.stringify(obj1));
  } else if (parseUrl.pathname == '/api/unixtime') {
    var d2 = new Date(parseUrl.query.iso);
    var obj2 = { 'unixtime': d2.valueOf() };
    res.end(JSON.stringify(obj2));
  } else {
    res.writeHead(417, { 'Content-Type': 'application/json' });
  }
}).listen(process.argv[2]);