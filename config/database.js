require('dotenv').config();
const mongoose = require('mongoose');

const DB = process.env.MONGODB_URI

mongoose.connect(DB)

.then(() => {
    console.log('Database is connected successfully');
})

.catch((error)=> {
    console.log('Error in connecting to database' + error.message);
    
})