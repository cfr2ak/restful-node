const http = require('http');

http.createServer(handleRequest).listen(8080, 'localhost', () => {
    console.log('Started Node.js http server at http://localhost:8080')
});

