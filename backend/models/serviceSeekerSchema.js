const mongoose = require('mongoose');

const seekerSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true
    },
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
    },
    address: {
        type: String,
    },
    district: {
        type: String,
    },
    age: {
        type: Number,
    },
    orders: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Order'
        }
    ]
});

const ServiceSeeker = mongoose.model('ServiceSeeker', seekerSchema);

module.exports = ServiceSeeker;
