const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    age: Number,
    favorites: [String],
    marks: [Number]
})