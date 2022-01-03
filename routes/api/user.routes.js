const { Router } = require('express');
const { createProfile, getAll, updatedData, deletedData } = require('../../controllers/user.controller');
const userMiddleware = require('../../middlewares/user-middleware');

const router = Router();


///api/user/
router.post('/', userMiddleware, createProfile)
// /api/user/
router.get('/', getAll);
// /api/user/:id
router.put('/:id', userMiddleware, updatedData)
// /api/delete/:id
router.delete('/:id', userMiddleware, deletedData)


module.exports = router;