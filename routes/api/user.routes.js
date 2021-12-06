const { Router } = require('express');
const { getAll, updatedData } = require('../../controllers/user.controller')
const  authMiddleware  = require('../../middlewares/auth-middleware');
const router = Router();

// /api/user/
router.get('/', getAll);
// /api/user/:id
router.put('/:id', authMiddleware, updatedData)


module.exports = router;