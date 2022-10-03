const express = require('express')
const app = express()

const hostname = '127.0.0.1'; //localhost
const port = process.env.PORT || 3000; 

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
})

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);//not a ' but a `
});