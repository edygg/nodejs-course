var module1 = require('./module1');

if (process.argv.length == 4) {
  module1(process.argv[2], process.argv[3], function(err, data) {
    if (err) throw err;
    data.forEach(function (element) {
      console.log(element);
    });
  });
} else {
  console.log("Argumentos inválidos");
}