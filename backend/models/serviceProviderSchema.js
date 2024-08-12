const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    category: {
        type: String,
        required: true
    },
    experience: {
        type: Number,
        required: true, min: 0
    },
    pricePerHour: {
        type: Number,
        required: true,
        min: 0
    }
});

const providerSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true
    },
    name: {
        type: String,
        required: true
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
        required: true
    },
    address: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 18
    },
    gender: {
        type: String,
        enum: [
            'Male',
            'Female',
            'Other'
        ],
        required: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
        default: 0
    },
    services: [
        serviceSchema
    ],
    orders: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Order'
        }
    ]
});

const ServiceProvider = mongoose.model('ServiceProvider', providerSchema);

module.exports = ServiceProvider;
