var http = require('http');

http.get(process.argv[2], function(response) {
  var responseData = "";
  
  response.on('data', function(data) {
    responseData += data.toString();
  });
  
   response.on('end', function (data) {
        console.log(responseData.length);
        console.log(responseData);
    });
  
}).on('error', function(e) {
  console.log("Error: " + e.message);
});