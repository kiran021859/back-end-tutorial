const http = require('http');
const {readFileSync} = require('fs');

const homePage = readFileSync('./navbar-app/index.html');
const style = readFileSync('./navbar-app/styles.css');
const script = readFileSync('./navbar-app/browser-app.js');
const logo = readFileSync('./navbar-app/logo.svg');

const server = http.createServer((req, res)=>{
    console.log('user hit the server');
    //console.log(req.method);
    console.log(req.url);
    
    

    const url = req.url;
    if(url === '/'){
        res.writeHead(200, {'content-type': 'text/html'});
        res.write(homePage)
        res.end()
    } else if(url === '/about'){
        res.writeHead(200, {'content-type': 'text/html'});
        res.write('<h1>about World</h1>')
        res.end()
    }else if(url === '/styles.css'){
        res.writeHead(200, {'content-type': 'text/css'});
        res.write(style)
        res.end()
    } else if(url === '/browser-app.js'){
        res.writeHead(200, {'content-type': 'text/javascript'});
        res.write(script)
        res.end()
    }else if(url === '/logo.svg'){
        res.writeHead(200, {'content-type': 'image/svg+xml'});
        res.write(logo)
        res.end()
    }else {
        res.writeHead(404, {'content-type': 'text/html'});
        res.write('<h1>Page Not Found</h1>')
        res.end()
    }; 


    //console.log(res.url);
});

server.listen(5000);


//console.log('Express Tutorial')