const { Schema, model } = require('mongoose');

const OrderPhotoSchema = new Schema({
    order: { type: Schema.Types.ObjectId, ref: 'Orders' },
    photo: { type: Schema.Types.ObjectId, ref: 'Photo' },
    settings: {
        type: Schema.Types.ObjectId, ref: 'Paper',
        type: Schema.Types.ObjectId, ref: 'Size',
        type: Schema.Types.ObjectId, ref: 'Type',
        type: Schema.Types.ObjectId, ref: 'Price',
        type: Date, required: true
    },
    createdAt: {type: Date, default: Date.now},
    updatedAt: { type: Date, default: Date.now },
    deletedAt: {type:Date, default:null, nullable}
})

module.exports = model('OrderPhoto', OrderPhotoSchema)