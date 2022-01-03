const { Router } = require('express');
const { createOrderPhoto, getOrderPhoto, updateOrderPhoto, deleteOrderPhoto } = require('../../controllers/order.photo.controller');

const router = Router();

router.post('/', createOrderPhoto);
router.get('/:id', getOrderPhoto);
router.put('/:id', updateOrderPhoto);
router.delete('/:id', deleteOrderPhoto);

module.exports = router