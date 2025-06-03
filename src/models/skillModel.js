const mongoose = require('mongoose');

const skill = new mongoose.Schema({
    title: {
        type: String,
        required: true,
         unique: true,
    },
    score: {
        type: Number,
        required: true
    },
    isActive: { 
        type: Boolean, 
        default: false 
    }
});

const skillSchema = new mongoose.Schema({

    category: {
        type: String,
        required: true,
         unique: true,
    },

    skills: [skill],

}, {
    timestamps: true,
});

module.exports = mongoose.model('Skill', skillSchema); 