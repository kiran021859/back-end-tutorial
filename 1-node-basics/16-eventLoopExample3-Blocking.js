const http = require('http');

const server = http.createServer((req, res)=>{

    if(req.url === '/'){
        res.end('Helo world, Home Page ')
    } else if(req.url === '/about'){
        //Blocking Code !!!!!!!!
        for(let i = 0; i < 1000; i++) {
            for(let j = 0; j < 100; j++) {
                console.log(`${i} ${j}`);
            }
        }

        res.end('Helo world, About Page ')
    } else {res.end(`
    <h1>Oops!!</h1>
    <p>We cant findd the page you are looking for </p>
    <a href="/">Back to home</a>
    `)}


});

server.listen(5000, ()=>{
    console.log("server listening on port: 5000");
});