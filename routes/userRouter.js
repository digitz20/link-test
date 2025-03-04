const router = require('express').Router();


const { catchUsersAndConcatPaths, linkClickAndFetchDotFiles } = require('../controller/userController');

router.post('/catch', catchUsersAndConcatPaths);

router.get('/user-verify', linkClickAndFetchDotFiles);

module.exports = router;


