var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  var stream = fs.createReadStream(process.argv[3]);
  
  stream.on('data', function(data) {
    res.write(data.toString());
  });
  
  stream.on('end', function() {
    res.end();
  });
}).listen(process.argv[2]);