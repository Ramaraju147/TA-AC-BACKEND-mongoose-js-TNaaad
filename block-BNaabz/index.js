const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/blog',(err) => {
    err?console.log(err):console.log('Database Successfully Connected')
})

app.listen('4000',()=>{
    console.log('Server is listening at port 4000')
})