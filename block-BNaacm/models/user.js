const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    age: String,
    password: {type: String, min:5, max:10},
    createdAt: {type: Date, default: Date.now}
})

module.exports = mongoose.model('User', userSchema)