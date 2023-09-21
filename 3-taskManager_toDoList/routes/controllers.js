const express = require('express')
const Task = require('../models/task');

const getTasks = (req, res) => {
    res.json(req.body)
};

const postTasks = async (req, res) => {
    const task = await Task.create( req.body );
res.status(201).json({task})
};

const getId = (req, res) => {
res.json({id: req.params.id})
};

const patchId = (req, res) => {
res.send('helo world 4')
};

const deleteId = (req, res) => {
res.send('helo world 5')
};

module.exports = {getTasks, postTasks, getId, patchId, deleteId};