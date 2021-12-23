const { Router } = require('express');
const { createSize, getSize, updateSize, deleteSize } = require('../../controllers/size.contolller');

const router = Router();

router.post('/', createSize);
router.put('/:id', getSize);
router.put('/:id', updateSize);
router.delete('/:id', deleteSize);


module.exports = router