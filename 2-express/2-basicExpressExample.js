const express = require('express');
const { get } = require('lodash');
const app = express()

app.get('/', (req, res)=>{
    console.log('user at home');
    res.status(200).send('Home Page !')
})

app.get('/about', (req, res)=>{
    console.log('user at about');
    res.status(200).send('About Page !')
})

app.all('*', (req, res)=>{
    console.log("user hit error");
    res.status(404).send('<h1>Resource Not Found</h1>')
})

app.listen(5000, ()=>{
    console.log("server runing");
})