const express = require('express');
const app = express();
const morgan = require('morgan')
//const logger = require('./logger');
//const authorise = require('./authorise')
const port = 5000;



//req => middleware => res

// const logger = (req, res, next) => {
//     const method = req.method;
//     const url = req.url;
//     const time = new Date().getFullYear();
//     console.log(method,url,time);
//     //res.send('middle ware test')
//     next()
// }
//app.use(logger)//allows all routs to have logger as middleware
//app.use('/api', logger); // will apply to all pathers that have api in them

//app.use([logger, authorise]);

//app.use(express.static('./navbar-app'));
app.use(morgan('tiny'))

app.get('/', (req, res)=>{
    // const method = req.method;
    // const url = req.url;
    // const time = new Date().getFullYear();
    // console.log(method,url,time);    
    res.send('Home');
});

app.get('/about', (req, res)=>{
    res.send('About');
});

app.get('/api', (req, res)=>{
    res.send('Api');
});


app.get('/api/products', (req, res)=>{
    res.send('Products');
});


app.listen(port,()=>{
    console.log('server running port:',port);
})