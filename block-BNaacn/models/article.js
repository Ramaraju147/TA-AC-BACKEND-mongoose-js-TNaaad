const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: String,
    description: String,
    tags: [String],
    createdAt: {type: Date, default: Date.now()},
    likes: {type: Number, default: 0}
})

exports.default = mongoose.model('Article',articleSchema)