// server.js
const http = require('http'); // load http module

const hostname = '127.0.0.1';
const port = 3000;

// use createServer method to accept request and return response w/ a status code
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World! Welcome to Node.js');
});

// listen at a defined port.
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});