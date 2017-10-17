var router = require('express').Router();

// api router will mount other routers
// for all our resources
router.use('./job/jobRouter');
router.use('./user/userRouter');

module.exports = router;