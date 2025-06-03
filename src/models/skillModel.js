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
     user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true, // ensure post is always tied to a user
    },
    skills: [skill],

}, {
    timestamps: true,
});

module.exports = mongoose.model('Skill', skillSchema); 