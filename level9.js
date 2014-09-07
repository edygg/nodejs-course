var http = require('http');
var pages = process.argv.slice(2);

function getPages(pages) {
  if (!pages.length) return;
  
  http.get(pages[0], function(response) {
    var responseData = "";
    
    response.on('data', function(data) {
      responseData += data.toString();
    });

    response.on('end', function (data) {
      console.log(responseData);
      getPages(pages.slice(1));
    });
  });
}

getPages(pages);