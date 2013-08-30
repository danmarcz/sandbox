// some comment
var net = require('net');

// some comment
function connect() {

  var conn = net.createConnection(4000);

  conn.on('connect', function() {
    conn.write('message from client @ ' + Date.now() );
  });

  conn.on('data', function(data) {
    console.log('' + data); 
  });

}

setInterval(connect, 200);
