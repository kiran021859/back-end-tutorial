const express = require('express');
const { people } = require('../../data')


const getPeople = (req, res)=>{
    res.status(200).json({success:true, data: people});
};

const postPeople = (req, res) => {
    console.log(req.body);
    const {name} = req.body
    if(!name){
        return res.status(400).json({success: false, msg: 'please input correct name'});
    }
    return res.status(201).send({success:true, person:name})
};

const postPeoplePostman = (req, res)=>{
    const { name } = req.body

    if(!name){
        return res.status(404).json({success:false, msg:"please input name"})
    }
    
    return res.status(201).json({success:true, data:[...people, name]})
    
};

const putPeople = (req, res)=>{

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
};

const deletePeople = (req, res)=>{
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
};

module.exports = {getPeople, postPeople, postPeoplePostman, putPeople, deletePeople}