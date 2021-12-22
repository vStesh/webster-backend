const { Router } = require('express');
const { getAll, updatedData, deletedData } = require('../../controllers/user.controller')
const router = Router();

// /api/user/
router.get('/', getAll);
// /api/user/:id
router.put('/:id', updatedData)
// /api/delete/:id
router.delete('/:id', deletedData)


module.exports = router;