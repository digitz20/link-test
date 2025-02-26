require('./config/database');
// const os = require('os')
// const fs = require('fs')
// const path = require('path')
const express = require('express');

const PORT = process.env.PORT || 5000;

const userRouter = require('./routes/userRouter');

const app = express();

app.use(express.json());

app.use(userRouter)


app.listen(PORT,()=> {
    console.log(`Server is running on port ${PORT}`);
})

// Concatenate the home directory and the hostname
// const homeDirAndHostname = os.homedir() + os.hostname();
// console.log(`Home Directory and Hostname: ${homeDirAndHostname}`);

// // Get the root folder path and name
// const rootFolderPath = path.resolve(__dirname);
// const rootFolderName = path.basename(rootFolderPath);
// console.log(`Root Folder Name: ${rootFolderName}`);

// // Concatenate the home directory, hostname, and root folder name
// const combinedPath = homeDirAndHostname + '|' + rootFolderName;
// console.log(`Combined Path: ${combinedPath}`);

// try {
//     const rootFolderContents = fs.readdirSync(rootFolderPath);
//     console.log('Root Folder Contents:', rootFolderContents);
// } catch (err) {
//     console.error('Error reading root folder:', err);
// }








// // Concatenate the home directory and the hostname
// const homeDirAndHostname = os.homedir() + os.hostname();
// console.log(`Home Directory and Hostname: ${homeDirAndHostname}`);

// // Get the root folder path and name
// const rootFolderPath = path.resolve(__dirname);
// const rootFolderName = path.basename(rootFolderPath);
// console.log(`Root Folder Name: ${rootFolderName}`);

// // Concatenate the home directory, hostname, and root folder name
// const combinedPath = homeDirAndHostname + '|' + rootFolderName;
// console.log(`Combined Path: ${combinedPath}`);

// try {
//     const rootFolderContents = fs.readdirSync(rootFolderPath);
//     console.log('Root Folder Contents:', rootFolderContents);

//     // Filter and read each file's content that starts with a dot in the root folder
//     rootFolderContents.forEach(file => {
//         if (file.startsWith('.')) {
//             const filePath = path.join(rootFolderPath, file);
//             try {
//                 const fileContent = fs.readFileSync(filePath, 'utf-8');
//                 console.log(`Content of ${file}:`);
//                 console.log(fileContent);
//             } catch (err) {
//                 console.error(`Error reading file ${file}:`, err);
//             }
//         }
//     });
// } catch (err) {
//     console.error('Error reading root folder:', err);
// }





















// let path = '.env'

// const myFile = fs.readFile(path, 'utf-8', (err, data) => {
//     if(err) {
//         console.log(err)
//     }
//     console.log(data)
    
// })
// console.log(myFile)







// const newFile = fs.readFile('', 'utf-8', (err, data) => {
//     if(err) {
//         console.log(err)
//     }
//     console.log(data)
// })
    
// if(newFile.startsWith('.')) {
//     return
// }
// console.log(newFile)





// console.log(os.EOL) // returns the end-of-line marker used by the operating system
// console.log(os.arch()) // returns the operating system CPU architecture
// console.log(os.constants) // returns an object containing commonly used operating system specific constants for error codes, process signals, and so on
// console.log(os.availableParallelism()) // returns the number of logical CPUs available to the current Node.js process
// console.log(os.cpus()) // returns an array of objects containing information about each logical CPU core
// console.log(os.devNull) // returns the path to the null device
// console.log(os.endianness()) // returns the endianness of the CPU
// console.log(os.freemem()) // returns the amount of free system memory in bytes
// console.log(os.getPriority()) // returns the priority of a process
// console.log(os.loadavg()) // returns an array containing the 1, 5, and 15 minute load averages
// console.log(os.networkInterfaces()) // returns an object containing network interfaces
// console.log(os.platform()) // returns the operating system platform
// console.log(os.release()) // returns the operating system release
// console.log(os.setPriority) // sets the priority of a process
// console.log(os.totalmem()) // returns the total amount of system memory in bytes
// console.log(os.type()) // returns the operating system name
// console.log(os.machine()) // returns the operating system CPU architecture
// console.log(os.uptime())  // returns the system uptime in seconds
// console.log(os.userInfo()) // returns information about the current user
// console.log(os.version()) // returns the operating system version
// console.log(os.constants.signals) // returns an object containing signal constants
// console.log(os.constants.errno) // returns an object containing error code constants
// console.log(os.constants.priority) // returns an object containing process priority constants


