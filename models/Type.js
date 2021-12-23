const { Schema, model } = require('mongoose');

const TypeSchema = new Schema({
    name: { type: String, required: true },
    createdAt: {type: Date, default: Date.now},
    updatedAt: { type: Date, default: Date.now },
    deletedAt: { type: Date, default: null }
})

module.exports = model('Type', TypeSchema);