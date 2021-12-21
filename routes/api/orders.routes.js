const { Router } = require('express');
const { createOrder, getOrder, updateOrder, deleteOrder } = require('../../controllers/orders.controller');
const ordersMiddleware = require('../../middlewares/orders-middleware');


const router = Router();

// /api/orders/createOrder
router.post('/create', createOrder);
// /api/orders/getOrder
router.get('/getOrder/:id', getOrder);
// /api/orders/updateOrder
router.put('/update/:id', ordersMiddleware, updateOrder);
// /api/orders/deleteOrder
router.delete('/delete/:id', ordersMiddleware, deleteOrder);


module.exports = router;