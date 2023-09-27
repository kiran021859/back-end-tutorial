require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
// async errors 
const notFound = require('./middleware/not-found');
const errorHandle = require('./middleware/error-handler');
// database connection
const connectDB = require('./db/connect');
// Router functions
const router = require('./routes/products'); 
// express.json middleWare
app.use(express.json());
app.use(express.urlencoded({extended: false}));
//Routes
app.use('/api/v1/products', router)

//middleWare
app.use(notFound);
app.use(errorHandle);

const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => console.log(`Example app listening on port ${port}!`))
    } catch (error) {
        console.log(error);
    }
}

start()
