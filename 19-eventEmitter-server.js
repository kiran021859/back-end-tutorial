const http = require('http');

const server = http.createServer();

server.on('request', (req, res)=>{
    res.end("welcom");
});


server.listen(5000);    
