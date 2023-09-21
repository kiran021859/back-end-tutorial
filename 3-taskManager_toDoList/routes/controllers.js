const express = require('express')
const Task = require('../models/task');

const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json({tasks})
    } catch (error) {
        res.status(500).json({msg: error})
    }
};

const postTasks = async (req, res) => {
    try {
        const task = await Task.create( req.body );
        res.status(201).json({task})
    } catch (error) {
        res.status(500).json({msg: error})
        
    }
    

};

const getId = async (req, res) => {
try {
    const {id: taskID} = req.params;
    const task = await Task.findOne({_id:taskID}) 
    if(!task){
        return res.status(404).json({msg:`no task with matching ID ${taskID}`})
    
    };
    res.status(200).json({task})
} catch (error) {
     
    res.status(500).json({msg: error})
}
};

const patchId = async (req, res) => {
    try {
        const { id: taskID } = req.params

        const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
          new: true,
          runValidators: true,
        });
        if(!task){
            return res.status(404).json({msg:`no task with matching ID ${taskID}`})
        
        };
        res.status(200).json({task})
    } catch (error) {
        
        return res.status(404).json({msg:'there has been an error:', error: error})
    }

};

const deleteId = async (req, res) => {
    try {
        const {id:taskID} = req.params;
        const task = await Task.findOneAndDelete({_id:taskID})

        if(!task){
            return res.status(404).json({msg:`no task with matching ID ${taskID}`})
        
        };  
        return res.status(200).json({id: taskID, msg: 'this file has bean deleted'})
    } catch (error) {
        return res.status(500).json({msg: error})
    }
res.send('helo world 5')
};

module.exports = {getTasks, postTasks, getId, patchId, deleteId};

// const patchId = async (req, res) => {
//     try {
//         const {id: taskID} = req.params;
//         const name1 = req.body.name
//         const completed1 = req.body.completed
//         console.log(req.body);
//         const task = await Task
//         .findByIdAndUpdate(
//             {taskID}, 
//             req.body, 
//             {new:true, runValidators: true}) ; 

//         if(!task){
//             return res.status(404).json({msg:`no task with matching ID ${taskID}`})
        
//         };
//         res.status(200).json({task});
//     } catch (error) {
        
//         return res.status(404).json({msg:'there has been an error:', error: error})
//     }

// };