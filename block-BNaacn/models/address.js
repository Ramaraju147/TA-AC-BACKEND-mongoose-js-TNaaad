const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addressSchema = new Schema({
    village: String,
    city: String,
    state: String,
    pin: Number,
    user: {type: Schema.Types.ObjectId}
},{ timestamps: true })

exports.default = mongoose.model('Address',addressSchema)