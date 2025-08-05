const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('🚀 Hello from Jenkins CI/CD Pipeline with Docker!\n');
});
server.listen(8080, () => {
  console.log('Server running on port 8080');
});
