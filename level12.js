var http = require('http');

http.createServer(function (req, res) {
  if (req.method == 'POST') {
    var body = "";
    req.on('data', function (data) {
      body += data.toString().toUpperCase();
    });

    req.on('end', function() {
      res.end(body);  
    });
  }
}).listen(process.argv[2]);