const express = require('express')


const getTasks = (req, res) => {
  res.json(req.body)
};

const postTasks = (req, res) => {
res.json(req.body)
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