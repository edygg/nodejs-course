var fs = require('fs');

if (process.argv.length > 2) {
  var buffer = fs.readFileSync(process.argv[2]);
  var lines = buffer.toString().split("\n").length - 1;
  console.log(lines);
} else {
  console.log('Especifique el archivo');
}