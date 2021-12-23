const { Router } = require('express');
const { createOrder, getOrder, updateOrder, deleteOrder } = require('../../controllers/order.controller');
const ordersMiddleware = require('../../middlewares/orders-middleware');


const router = Router();

// /api/orders/createOrder
router.post('/', createOrder);
// /api/orders/getOrder
router.get('/:id', getOrder);
// /api/orders/updateOrder
router.put('/:id', ordersMiddleware, updateOrder);
// /api/orders/deleteOrder
router.delete('/:id', ordersMiddleware, deleteOrder);


module.exports = router;