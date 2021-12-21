const { Schema, model } = require('mongoose');

const PriceSchema = new Schema({
    service: { type: Schema.Types.ObjectId, ref: 'Service' },
    paper: { type: Schema.Types.ObjectId, ref: 'Paper' },
    size: { type: Schema.Types.ObjectId, ref: 'Size' },
    type: { type: Schema.Types.ObjectId, ref: 'Type' },
    price: { type: Integer, required: true },
    currency: { enum: ['UAH'], default: 0 },
    createdAt: {type: Date, default: Date.now},
    updatedAt: { type: Date, default: Date.now },
    deletedAt: {type:Date, default:null, nullable}
})

module.exports = model('Price', PriceSchema)