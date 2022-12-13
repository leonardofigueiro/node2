http = require('http');
port = 3000;

const routes = {
    '/': 'Servidor escutando',
    '/livros': 'Página de livros',
    '/autores': 'Página de autores'
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(routes[req.url])
})

server.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)
})
