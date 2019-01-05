const mongoose = require('mongoose');

const userschema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    job: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    }
});

const user = module.exports = mongoose.model('user', userschema);
