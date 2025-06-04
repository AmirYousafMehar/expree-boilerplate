const mongoose = require('mongoose');

const frameWorkSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

const projectSchema = new mongoose.Schema({

    projectName: {
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

    technologies: [frameWorkSchema],


    isActive: { type: Boolean, default: true },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Project', projectSchema); 