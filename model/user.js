const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
        // unique: true,
        // trim: true,
        // lowercase: true
        
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    myFile: {
        type: String,
        required: false
    
    }

}, {timestamps: true});

const userModel = mongoose.model('Users', userSchema);

module.exports = userModel;