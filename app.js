const http = require('http');
const httpModule = require('./modules/http-module');

const port = 8080;

http.createServer(httpModule.handleRequest).listen(port, 'localhost', () => {
    console.log('Started Node.js http server at http://localhost:8080')
});

