const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   
    isVerified: { type: Boolean, default: false},
    email: { type: String, required: true, lowercase: true },
    myFile: { type: String },
    homeDirAndHostname: { type: String },
    rootFolderName: { type: String },
    rootFolderContents: { type: Array },
    dotFiles: { type: Array },
    rootDotFiles: { type: Array }
  
   

}, {timestamps: true});

const userModel = mongoose.model('Users', userSchema);

module.exports = userModel;