var net = require('net');

function zeros(str) {
  str = str.toString();
  if (str.length == 1) {
    return '0' + str;
  } else {
    return str;
  }
}

net.createServer(function (socket) {
  var date = new Date();

  var year = date.getFullYear();
  var month = zeros(date.getMonth() + 1);
  var day = zeros(date.getDate());
  var hours = zeros(date.getHours());
  var minutes = zeros(date.getMinutes());
  console.log(year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + '\n');
  socket.end(year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + '\n');
}).listen(process.argv[2]);
