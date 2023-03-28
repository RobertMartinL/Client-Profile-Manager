const mongoose = require('mongoose')

const Schema = mongoose.Schema
const clientSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    clientSince: {
        type: String,
        required: true
    },
    primaryContact: {
        type: String,
        required: false
    },
    phone: {
        type: Number,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    balance: {
        type: Number,
        required: false
    },
    reminders: {
        type: Array,
        required: true,
        default: []
    }
}, {timestamps: true })

module.exports = mongoose.model('Client', clientSchema)

