const express = require('express')
const Task = require('../models/task');
const asyncWrapper = require('../middleWare/asyncMiddleWare');
const { createCustomerError } = require('../errors/customError');

const getTasks = asyncWrapper( async (req, res) => {
        const tasks = await Task.find({});
        res.status(200).json({tasks})

});

const postTasks = asyncWrapper( async (req, res) => {
        const task = await Task.create( req.body );
        res.status(201).json({task});
});

const getId = asyncWrapper( async (req, res) => {
    const {id: taskID} = req.params;
    const task = await Task.findOne({_id:taskID}) 
    if(!task){
        return next(createCustomerError(`No task with id: ${taskID}`, 404))
        
    };
    res.status(200).json({task})
});

const patchId = asyncWrapper( async (req, res) => {
        const { id: taskID } = req.params
        const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
          new: true,
          runValidators: true,
        });
        if(!task){
            return next(createCustomerError(`No task with id: ${taskID}`, 404))
           
        };
        res.status(200).json({task})
});

const deleteId = asyncWrapper( async (req, res) => {
        const {id:taskID} = req.params;
        const task = await Task.findOneAndDelete({_id:taskID})
        if(!task){
            return next(createCustomerError(`No task with id: ${taskID}`, 404))
        };  
        return res.status(200).json({id: taskID, msg: 'this file has bean deleted'})
});

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