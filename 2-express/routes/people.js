const express = require('express');
const router = express.Router( )

const { people } = require('../data')

router.post('/', (req, res) => {
    console.log(req.body);
    const {name} = req.body
    if(!name){
        return res.status(400).json({success: false, msg: 'please input correct name'});
    }
    return res.status(201).send({success:true, person:name})
})


router.get('/', (req, res)=>{
    res.status(200).json({success:true, data:people});
})


//post to postman
router.post('/postman', (req, res)=>{
    const { name } = req.body

    if(!name){
        return res.status(404).json({success:false, msg:"please input name"})
    }
    
    return res.status(201).json({success:true, data:[...people, name]})
    
})

router.put('/:id', (req, res)=>{

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


router.delete('//:id', (req, res)=>{
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

module.exports = router