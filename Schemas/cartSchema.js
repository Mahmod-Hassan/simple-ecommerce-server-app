const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    userEmail: { type: String, required: true },
    productId: { type: String, required: true },
    quantity: { type: Number, required: true, default: 1 },
    color: {
        type: String, required: true
    },
    size: {
        type: String, required: true
    }
})

module.exports = cartSchema;