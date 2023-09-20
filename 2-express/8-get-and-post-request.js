const express = require('express');
const app = express();
const { people } = require('./data')
port = 5000

app.use(express.static('./methods-public'))

//pars form data (access form data)
app.use(express.urlencoded({extended: false}))

//pars json data (access json form data)
app.use(express.json())

// app.post('/login', (req, res)=>{
//     console.log(req.body.name);
//     res.send('post')
// })


app.post('/api/people', (req, res) => {
    console.log(req.body);
    const {name} = req.body
    if(!name){
        return res.status(400).json({success: false, msg: 'please input correct name'});
    }
    return res.status(201).send({success:true, person:name})
})

app.post('/login', (req, res)=>{
    const {name} = req.body;
    if(name){
        return res.status(200).send(`welcome ${name}`)
    }
    res.status(401).send('please provide credentials')
})



app.get('/api/people', (req, res)=>{
    res.status(200).json({success:true, data:people});
})


app.listen(port, ()=>{
    console.log('server listening to port:',port);
})