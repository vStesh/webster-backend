const { Schema, model } = require('mongoose');

const SizeSchema = new Schema({
    name: { type: String, required: true },
    width: { type: Number, required: true },
    hight: { type: Number, required: true}
})

module.exports = model('Size', SizeSchema)