var http = require('http'),
    url = require('url'),
    requestHandlers = require('./requestHandlers'),
    static = require('node-static'),
    file = new static.Server('../client', { cache: 0 });

function start() {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname,
            path = pathname.split('/'),
            collection = path[1],
            id = path[path.length-1];

        if (pathname === '/countries') {
            response.writeHead(200, {'Content-Type': 'application/json'});
            response.write(requestHandlers.getCountries());
            response.end();
        }

        if (pathname === '/students') {
            response.writeHead(200, {'Content-Type': 'application/json'});
            response.write(requestHandlers.getStudents());
            response.end();
        }

        if (request.method === 'DELETE') {

            if (collection === 'countries') {
                requestHandlers.removeCountry(id);
            }
            response.end();
        }

        if (request.method === 'PUT') {
            
            if (collection === 'students') {
                requestPayload(request, id);
            }
            response.end();
        }

        file.serve(request, response);
    }
    
    function requestPayload (req, id) {
        var buffer = '';

        req.on('data', function (data) {
            buffer += data;
        });
        req.on('end', function() {
            requestHandlers.changeData(id, buffer);
        });

    };

    http.createServer(onRequest).listen(3000);
    console.log('Server has started.');
}

exports.start = start;