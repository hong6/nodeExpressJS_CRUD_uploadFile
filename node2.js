var http = require('http');    

var server = http.createServer(function onRequest(req, res) {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.write('here is content.');
    res.end();
}).listen(3000);