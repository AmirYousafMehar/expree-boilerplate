const mongoose = require('mongoose');

const contactUsSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        unique: true,
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true, // ensure post is always tied to a user
    },
    message: {
        type: String,
        required: true,
    },

    subject: {
        type: String,
        required: true,
    },


    isActive: { type: Boolean, default: true },
}, {
    timestamps: true,
});

module.exports = mongoose.model('ContactUs', contactUsSchema); 