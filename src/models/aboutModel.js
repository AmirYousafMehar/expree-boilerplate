const mongoose = require('mongoose');

const expertiesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

const aboutSchema = new mongoose.Schema({

    country: {
        type: String,
        required: true,
    },

    state: {
        type: String,
        required: true,
    },

    city: {
        type: String,
        required: true,
    },

    aboutDetail: {
        type: String,
        required: true,
    },

    resume: {
        type: String,
        required: true,
        unique: true,
    },

    experties: [expertiesSchema],

    description: {
        type: String,
        required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true, // ensure post is always tied to a user
    },

    isActive: { type: Boolean, default: false },
}, {
    timestamps: true,
});

module.exports = mongoose.model('About', aboutSchema); 