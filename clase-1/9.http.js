/** @format */

const http = require('node:http');

const server = http.createServer((req, res) => {
  console.log('reques received');
  res.end('Hola mundo');
});

server.listen(3000, () => {
  console.log('server listening on port 3000');
});
