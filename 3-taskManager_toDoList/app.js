const express = require('express');
require('./DB/connect');
const app = express();
const port = process.env.PORT || 5000;
console.log('Task Manager App');
const tasks = require('./routes/task');
const connectDB = require('./DB/connect');
require('dotenv').config() ;// .env connection
const notFound = require('./middleWare/notFound')
const errorHandle = require('./middleWare/errorHandler')


app.use(express.static('./public'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/api/v1/tasks', tasks );
app.use(  notFound  )


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