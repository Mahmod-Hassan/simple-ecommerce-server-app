const { default: mongoose } = require("mongoose");


const productSchema = mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    variation: {
        type: {
            colors: {
                type: [String], // Array of strings
            },
            sizes: {
                type: [String], // Array of strings
            },
        }
    }
});

module.exports = productSchema;