var http = require('http'),
    static = require('node-static'),
    file = new static.Server('../client');

function start() {
    function onRequest(request, response) {
        file.serve(request, response);
  }

    http.createServer(onRequest).listen(3000);
    console.log('Server has started.');
}

start();