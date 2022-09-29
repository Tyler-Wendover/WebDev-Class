const http = require('http');

const hostname = '127.0.0.1'; //localhost
const port = 3000; 

const server = http.createServer((req, res) => {

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);//not a ' but a `
  
});

const fatArrow = x => x * 2; 
