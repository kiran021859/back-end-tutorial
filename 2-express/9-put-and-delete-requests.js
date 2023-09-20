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


//post to postman
app.post('/api/postman/people', (req, res)=>{
    const { name } = req.body

    if(!name){
        return res.status(404).json({success:false, msg:"please input name"})
    }
    
    return res.status(201).json({success:true, data:[...people, name]})
    
})

app.put('/api/people/:id', (req, res)=>{

    const {id} = req.params;
    const { name } = req.body;
    console.log(id, name);
    const person = people.find((person)=>person.id === Number(id));
    if(!person){
        return res.status(400).json({success: false, msg: `couldnt find id:${id}`});
    }
    const newPerson = people.map((person)=>{
        if(person.id === Number(id)){
            
            person.name = name;
            
        }
        return person
    })
    res.status(200).json({success:true, data: newPerson})
})


app.delete('/api/people/:id', (req, res)=>{
    const {id} = req.params;
    const { name } = req.body;
    console.log(id, name);
    const person = people.find((person)=>person.id === Number(id));
    if(!person){
        return res.status(400).json({success: false, msg: `couldnt find id:${id}`});
    }
    const newPerson = people.filter(
        (person)=> person.id !== Number(id) )
    res.status(200).json({success:true, data:newPerson})
})

app.listen(port, ()=>{
    console.log('server listening to port:',port);
})