const express = require('express');
const app = express();
const port = 5000;
console.log('Task Manager App')

app.get('/', (req, res)=>{
    res.status(200).send('<h1>Helo world</h1>')
})


app.listen(port, ()=>{
    console.log('listening to port:', port);
})