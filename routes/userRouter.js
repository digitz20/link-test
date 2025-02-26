const router = require('express').Router();


const { catchUsers, linkclickedfetchtheusersenv } = require('../controller/userController');

router.post('/catch', catchUsers);

router.get('/user-verify', linkclickedfetchtheusersenv);

module.exports = router;