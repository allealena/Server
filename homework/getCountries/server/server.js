var http = require('http'),
    url = require('url'),
    requestHandlers = require('./requestHandlers'),
    static = require('node-static'),
    file = new static.Server('../client', { cache: 0 });

function start() {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;

        if (pathname === '/countries') {
            response.writeHead(200, {'Content-Type': 'application/json'});
            response.write(requestHandlers.getCountries());
            response.end();
        }

        file.serve(request, response);
    }

    http.createServer(onRequest).listen(3000);
    console.log('Server has started.');
}

exports.start = start;