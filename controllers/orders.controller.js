const Orders = require('../models/Orders');
const User = require('../models/User');
const Service = require('../models/Service');
const { getRes } = require('../service/getResponse');

exports.createOrder = async (req, res) => {
    try {
        const {comment, service, settings} = req.body
        const userData = req.user
        const user = await User.findById({ _id: userData.id })
        const findService = await Service.findOne({ name: service })
        const order = new Orders({ user: user._id, comment, service: findService, settings})
        await order.save()
        return res.status(200).json(getRes(0, { message: 'The order has been successfully created' }))
    } catch (err) {
        return res.status(400).json(getRes(100, { error: err.message }))
    }
}
exports.getOrder = async (req, res) => {
    try {
        const idOrder = req.params
        const order = await Orders.findById({ _id: idOrder.id }).populate(['user', 'service'])
        return res.status(200).json(getRes(0, { message: 'The order successfully received', data: order}))
    } catch (err) {
        return res.status(400).json(getRes(100, {error: err.message}))
    }
}
exports.updateOrder = async (req, res) => {
    try {
        const idOrder = req.params
        const updateData = req.body
        const order = await Orders.findByIdAndUpdate(idOrder.id, updateData, { new: true })
        if (!order) {
            return res.status(400).json(getRes(34, {message: 'Order not found'}))
        }
        return res.status(200).json(getRes(0, { message: 'The order successfully updated', data: order}))
    } catch (err) {
        return res.status(400).json(getRes(100, {error: err.message}))
    }
}
exports.deleteOrder = async (req, res) => {
    try {
        const idOrder = req.params
        const order = await Orders.findById({ _id: idOrder.id })
        if (!order) {
            return res.status(400).json(getRes(34, { message: 'Order not found' }))
        }
        order.deletedAt = Date.now()
        await order.save()
        return res.status(200).json(getRes(0, {message: 'The order successfully deleted'}))
    } catch (err) {
        return res.status(400).json(getRes(100, {error: err.message}))
    }
}