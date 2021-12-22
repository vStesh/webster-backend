const { Schema, model } = require('mongoose');

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

const OrdersSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true  },
    number: { type: Number, required: true, default: getRandomArbitrary(0, 500) },
    comment: { type: String },
    service: { type: Schema.Types.ObjectId, ref: 'Service', required: true },
    settings: { type: Object, required: true },
    createdAt: {type: Date, default: Date.now},
    updatedAt: { type: Date, default: Date.now },
    deletedAt: { type: Date, default: null }
})

module.exports = model('Orders', OrdersSchema)