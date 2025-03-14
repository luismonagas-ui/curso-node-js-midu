/** @format */

const http = require('node:http');
const { finAvailablePort } = require('./10.free-port');

const desiredPort = process.env.PORT ?? 3000;

const server = http.createServer((req, res) => {
  console.log('request received');
  res.end('Hola mundo');
});

finAvailablePort(desiredPort).then((port) => {
  server.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}`);
  });
});
