const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('HI MALUUUU!\n');
});
server.listen(8080, () => {
  console.log('Server running on port 8080');
});
