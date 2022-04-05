const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user')

mongoose.connect('mongodb://127.0.0.1:27017/blog',(err) => {
    console.log(err?err:"Database connected successfully")
})

const app = express();

app.use(express.json());

app.post('/users',(req,res) => {
    User.create(req.body,(err,document) => {
        res.json(document);
    })
})

app.get('/users',(req,res) => {
    User.find({},(err,documents) => {
        res.json({documents:documents});
    })
})

app.get('/users/:id',(req,res) => {
    let id = req.params.id;
    User.findById(id,(err,document) => {
        res.json(document)
    })
})

app.put('/users/:id', (req,res) => {
    let id = req.params.id;
    User.findByIdAndUpdate(id,req.body,{new: true},(err,document) => {
        res.json(document)
    })
})

app.delete('/users/:id', (req,res) => {
    let id = req.params.id;
    User.findByIdAndDelete(id,(err,document) => {
        res.send("User is deleted")
    })
})

app.listen('4000', ()=>{
    console.log('Server is listening on port 4000')
})