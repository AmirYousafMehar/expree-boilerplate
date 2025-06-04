const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

const blogSchema = new mongoose.Schema({

    blogTitle: {
        type: String,
        required: true,
        unique: true,
    },

    coverImage: {
        type: String,
        required: true,
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true, // ensure post is always tied to a user
    },
    description: {
        type: String,
        required: true,
    },

    tag: [tagSchema],


    isActive: { type: Boolean, default: true },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Blog', blogSchema); 