const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true},
    password: {type: String, required: true},
    createdAt: {type: Date, default: Date.now},
    updatedAt: { type: Date, default: Date.now },
    resetToken: { type: String, default: '' },
    resetTokenExp: {type: Date, default: ''}
});

module.exports = model('User', UserSchema);