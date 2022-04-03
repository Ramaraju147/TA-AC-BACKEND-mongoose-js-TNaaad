const mongoose = require('mongoose');
const Schema = mongoose.schema;

const articleSchema = new Schema({
    name: String,
    author: String,
    pages: Number
})