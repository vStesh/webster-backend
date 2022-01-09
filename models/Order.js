const { Schema, model } = require('mongoose');
const mongooseSerial = require('mongoose-serial');

const OrderSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true  },
    number: { type: String },
    comment: { type: String },
    service: { type: Schema.Types.ObjectId, ref: 'Service', default: null },
    settings: { type: Object },
    createdAt: {type: Date, default: Date.now},
    updatedAt: { type: Date, default: Date.now },
    deletedAt: { type: Date, default: null }
})

OrderSchema.plugin(mongooseSerial, { field: 'number', digits: 1 });

module.exports = model('Orders', OrderSchema);