const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello World from Azure VM 🚀');
});

server.listen(3000);