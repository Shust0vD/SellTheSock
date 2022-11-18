const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter');
const adRouter = require('./adRouter');

router.use('/user', userRouter);
router.use('/ad', adRouter);

module.exports = router;
