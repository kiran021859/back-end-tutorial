const express = require('express');
const app = express();
//const { people } = require('./data')
const people = require('./routes/people')
const auth = require('./routes/auth')
port = 5000

app.use(express.static('./methods-public'))

//pars form data (access form data)
app.use(express.urlencoded({extended: false}))

//pars json data (access json form data)
app.use(express.json())

//pull from router
app.use('/api/people/', people )

app.use('/login', auth)

// app.post('/login', (req, res)=>{
//     console.log(req.body.name);
//     res.send('post')
// })




app.listen(port, ()=>{
    console.log('server listening to port:',port);
})