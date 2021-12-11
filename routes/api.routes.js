const {Router} = require('express');
const authMiddleware = require('../middlewares/auth-middleware');
const {getRes} = require("../service/getResponse");

const router = Router();

router.use('/auth', require('./api/auth.routes'));
router.use('/user', require('./api/user.routes'));
router.use('/event', authMiddleware, require('./api/event.routes'));
router.use('/organize', authMiddleware, require('./api/organize.routes'));
router.get('/', (req, res) => {
    res.send('home api');
});
router.get('*', (req, res) => {
    res.status(404).json(getRes(404));
});
module.exports = router;