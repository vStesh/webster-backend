const { Router } = require('express');
const { createOrder, getOrder, getOrders, updateOrder, deleteOrder } = require('../../controllers/order.controller');
const ordersMiddleware = require('../../middlewares/orders-middleware');


const router = Router();

// /api/order/createOrder
router.post('/', createOrder);
// /api/order/getOrder
router.get('/:id', getOrder);
// /api/order/getOrders
router.get('/', getOrders);
// /api/order/updateOrder
router.put('/:id', ordersMiddleware, updateOrder);
// /api/order/deleteOrder
router.delete('/:id', ordersMiddleware, deleteOrder);


module.exports = router;