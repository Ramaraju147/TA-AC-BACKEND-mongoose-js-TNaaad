const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/blogs',(err)=>{
    err?console.log(err):console.log("Databse Connected Successfully")
})

const app = express();

app.listen('4000', ()=>{
    console.log('Server is listening on port 4000')
})