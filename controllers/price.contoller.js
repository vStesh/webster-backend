const Price = require('../models/Price');
const { getRes } = require('../service/getResponse');


exports.createPrice = async (req, res) => {
    try {
        
    } catch (err) {
        return res.status(400).json(getRes(100, { error: err.message }))
    }
}

exports.getPrice = async (req, res) => {
    try {
        const idPrice = req.params
        const price = await Price.findById(idPrice)
        if (!price) {
            return res.status(404).json(getRes(404, { message: 'Price not found' }))
        }
        return res.status(200).json(getRes(0, { data: price}))
    } catch (err) {
        return res.status(400).json(getRes(100, { error: err.message }))
    }
}

exports.updatePrice = async (req, res) => {
    try {
        const idPrice = req.params
        const updateData = req.body
        const price = await Price.findByIdAndUpdate(idPrice.id, updateData, { new: true })
        return res.status(200).json(getRes(0, {message: 'The price has been successfully updated', data: price}))
    } catch (err) {
        return res.status(400).json(getRes(100, { error: err.message }))
    }
}

exports.deletePrice = async (req, res) => {
    try {
        const idPrice = req.params
        const price = await Price.findById(idPrice)
        if (!price) {
            return res.status(404).json(getRes(404, { message: 'Price not found' }))
        }
        price.deleteAt = Date.now()
        await price.save()
        return res.status(200).json(getRes(0, { message: 'The price has been successfully deleted'}))
    } catch (err) {
        return res.status(400).json(getRes(100, { error: err.message }))
    }
}