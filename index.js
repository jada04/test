const http = require('http');

const server = http.createServer((req, res) => {
  // "res.send" ile ekrana yazdırma
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.send('Merhaba Dünya');
});

const port = 3000;

server.listen(port, () => {
  console.log(`Sunucu çalışıyor. Port: ${port}`);
});