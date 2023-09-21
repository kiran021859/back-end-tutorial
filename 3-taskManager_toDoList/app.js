const express = require('express');
require('./DB/connect');
const app = express();
const port = 5000;
console.log('Task Manager App');
const tasks = require('./routes/task');
const connectDB = require('./DB/connect')
require('dotenv').config() // .env connection

app.use(express.static('./public'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/api/v1/tasks', tasks );

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, ()=>{
            console.log(`listening to port:${port}...`);
        })
    } catch (error) {
        console.log(error);
    }
}

start()