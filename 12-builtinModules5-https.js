const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Helo world, Home Page ')
    } else if(req.url === '/about'){
        res.end('Helo world, About Page ')
    } else {res.end(`
    <h1>Oops!!</h1>
    <p>We cant findd the page you are looking for </p>
    <a href="/">Back to home</a>
    `)}
    //console.log(req);
    //res.write('Helo world, Home Page ')
    //res.end()
});

server.listen(5000)

