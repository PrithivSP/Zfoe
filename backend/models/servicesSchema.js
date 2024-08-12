const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true
    },
    providerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ServiceProvider',
        required: true
    },
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ServiceSeeker',
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true, min: 0
    },
    status: {
        type: String,
        enum: [
            'Requested',
            'Pending',
            'Cancelled',
            'Completed'
        ],
        required: true
    }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
