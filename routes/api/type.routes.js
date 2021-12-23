const { Router } = require('express');
const { createType, getType, updateType, deleteType } = require('../../controllers/type.controller');

const router = Router();

router.post('/', createType);
router.put('/:id', getType);
router.put('/:id', updateType);
router.delete('/:id', deleteType);

module.exports = router