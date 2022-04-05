const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: String,
    description: String,
    tags: [String],
    likes: Number,
    author: Schema.Types.ObjectId,
    comments: String
},{timestamps: true})

module.exports = mongoose.model("Article",articleSchema)