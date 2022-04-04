const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: {type: String,lowercase: true},
    age: {type: Number, default:0},
    password: {type: String,min: 5},
    favourites: [String],
    createdAt: { type: Date,default: Date.now()}
},{ timestamps: true })

exports.default = mongoose.model('User',userSchema)