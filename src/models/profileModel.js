const mongoose = require('mongoose');

const frameWorkSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

const profileSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true,
    },

    lastName: {
        type: String,
        required: true,
    },

    gitUrl: {
        type: String,
        required: true,
        unique: true,
    },

    linkedInUrl: {
        type: String,
        required: true,
        unique: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true, // ensure post is always tied to a user
    },
    profileImageUrl: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },

    frameWorks: [frameWorkSchema],

    stackName: {
        type: String,
        required: true,
        unique: true,
    },

    profileSummery: {
        type: String,
        required: true,
        // unique: true,
    },

    isActive: { type: Boolean, default: true },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Profile', profileSchema); 