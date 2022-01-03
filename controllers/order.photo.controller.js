const OrderPhoto = require('../models/Order_photo');
const Order = require('../models/Order');
const Photo = require('../models/Photo');
const Paper = require('../models/Paper');
const Size = require('../models/Size');
const Type = require('../models/Type');
const Price = require('../models/Price');
const { getRes } = require('../service/getResponse');


exports.createOrderPhoto = async (req, res) => {
    try {
        const { order, photo, settings } = req.body;
    } catch (err) {
        return res.status(400).json(getRes(100, { error: err.message }))
    }
}
exports.getOrderPhoto = async (req, res) => {
    try {
        const idOrderPhoto = req.params
        const order_photo = await OrderPhoto.findById(idOrderPhoto);
        if (!order_photo) {
            return res.status(404).json(getRes(35, { message: 'Order-Photo not found' }))   
        }
        return res.status(200).json(getRes(0, { data: order_photo }))
    } catch (err) {
        return res.status(400).json(getRes(100, { error: err.message }))
    }
}
exports.updateOrderPhoto = async (req, res) => {
    try {
        
    } catch (err) {
        return res.status(400).json(getRes(100, { error: err.message }))
    }
}
exports.deleteOrderPhoto = async (req, res) => {
    try {
        const idOrderPhoto = req.params
        const order_photo = await OrderPhoto.findById(idOrderPhoto);
        if (!order_photo) {
            return res.status(404).json(getRes(35, { message: 'Order-Photo not found' }))   
        }
        order_photo.deleteAt = Date.now()
        await order_photo.save()
        return res.status(200).json(getRes(0, { message: 'The order-photo has been successfully deleted', data: order_photo }))
    } catch (err) {
        return res.status(400).json(getRes(100, { error: err.message }))
    }
}