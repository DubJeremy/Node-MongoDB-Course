const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Réponse du server !');
});

server.listen(process.env.PORT || 3000);