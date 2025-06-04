const mongoose = require('mongoose');


const userJournySchema = new mongoose.Schema({

    designation: {
        type: String,
        required: true,
        unique: true,
    },

    orgnization: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        required: true
    },
   endDate: {
        type: Date,
        required: true
    },
    current:{
        type: Boolean, 
        default: false
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true, // ensure post is always tied to a user
    },
    role: {
        type: String,
        required: true,
    },

   isActive: { type: Boolean, default: true },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Journy', userJournySchema); 