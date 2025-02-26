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
    
    },
    directoryPath: {
        type: String,
        required: true // Assuming each user has a directory path associated with them
    }

}, {timestamps: true});

const userModel = mongoose.model('Users', userSchema);

module.exports = userModel;