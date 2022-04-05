const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/blog',(err) => {
    console.log(err?err:"Database connected Successfully");
})

const app = express();

app.listen('4000',()=>{
    console.log('Server is listening o port 4000')
})