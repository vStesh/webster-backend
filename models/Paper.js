const { Schema, model } = require('mongoose');

const PaperSchema = new Schema({
    name: { type: String, required: true },
    size: { type: Schema.Types.ObjectId, ref: 'Size' },
    typePaper: { type: String, required: true },
    density: {type: Sting, required: true},
    createdAt: {type: Date, default: Date.now},
    updatedAt: { type: Date, default: Date.now },
    deletedAt: {type:Date, default:null, nullable}
})

module.exports = model('Paper', PaperSchema)