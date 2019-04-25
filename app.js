const http = require('http')

http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.end('Hello world!');
    console.log('Hello handler requested');
}).listen(8080, 'localhost', () => {
    console.log('Started Node.js http server at http://localhost:8080')
});