var net = require('net');
var util = require('util');

process.title = 'Test server';
console.log('Process "' + process.title + '" is running on ' + process.platform + ' as pid ' + process.pid);
console.log('Memory: ' + util.inspect(process.memoryUsage()));

net.createServer(function(stream) {
  stream.on('data', function (data) {
    console.log('' + data);
    stream.end('#');
  });
}).listen(4000);
