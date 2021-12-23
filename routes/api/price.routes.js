const { Router } = require('express');
const { createPrice, getPrice, updatePrice, deletePrice } = require('../../controllers/price.contoller');

const router = Router();

router.post('/', createPrice);
router.put('/:id', getPrice);
router.put('/:id', updatePrice);
router.delete('/:id', deletePrice);

module.exports = router