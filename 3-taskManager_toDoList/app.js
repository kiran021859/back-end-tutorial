const express = require('express');
const app = express();
const port = 5000;
console.log('Task Manager App')
const tasks = require('./routes/task')


app.use(express.static('./methods-public'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/api/v1/tasks', tasks );

app.listen(port, ()=>{
    console.log(`listening to port:${port}...`);
})