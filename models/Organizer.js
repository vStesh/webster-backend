const { Schema, model } = require('mongoose');

const OrganizerSchema = new Schema({
    email: { type: String, required: true, unique: true},
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
    name: { type: String, required: true },
    description: { type: String, required: true },
    delete: {type: Boolean, required: true, default: false} 
})

module.exports = model('Organizer', OrganizerSchema)