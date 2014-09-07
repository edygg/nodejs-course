var http = require('http');

http.get(process.argv[2], function(response) {
  response.on("data", function (data) {
    console.log(data.toString());
  });
}).on('error', function(e) {
  console.log("Error: " + e.message);
});