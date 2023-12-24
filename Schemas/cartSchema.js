const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    email: { type: String, required: true },
    items: [
      {
        productId: { type: String, required: true },
        quantity: { type: Number, default: 1 },
        color: { type: String, required: true },
        size: { type: String, required: true },
      },
    ],
  });

module.exports = cartSchema;