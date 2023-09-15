/*

console.log('start');
setTimeout(() => {
    console.log('process');
}, 0);
console.log('end');

*/
// console.log("heloooooo");
// //console.log(__dirname);
// setInterval(() => {
//     console.log("Helo world!!!");
// }, 1000);

// console.log("byeeeeeee");

const http = require('http');

const server = http.createServer((req, res) => {
    
    console.log('request event');
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

server.listen(5000, ()=>{
    console.log('Server listening port 5000');
})



