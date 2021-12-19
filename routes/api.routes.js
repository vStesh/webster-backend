const {Router} = require('express');
const authMiddleware = require('../middlewares/auth-middleware');
const {getRes} = require("../service/getResponse");

const router = Router();

router.use('/auth', require('./api/auth.routes'));
router.use('/user', authMiddleware, require('./api/user.routes'));
router.use('/service', authMiddleware, require('./api/service.routes'));
router.use('/orders', authMiddleware, require('./api/orders.routes'));
router.get('/', (req, res) => {
    res.send('home api');
});
router.get('*', (req, res) => {
    res.status(404).json(getRes(404));
});
module.exports = router;