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
        return res.status(200).json(getRes(0, { data: price}))
    } catch (err) {
        return res.status(400).json(getRes(100, { error: err.message }))
    }
}

exports.updatePrice = async (req, res) => {
    try {
        
    } catch (err) {
        return res.status(400).json(getRes(100, { error: err.message }))
    }
}

exports.deletePrice = async (req, res) => {
    try {
        
    } catch (err) {
        return res.status(400).json(getRes(100, { error: err.message }))
    }
}