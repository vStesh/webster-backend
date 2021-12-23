const Size = require('../models/Size');
const { getRes } = require('../service/getResponse');

exports.createSize = async (req, res) => {
    try {
        
    } catch (err) {
        return res.status(400).json(getRes(100, { error: err.message }))
    }
}

exports.getSize = async (req, res) => {
    try {
        const idSize = req.params
        const size = await Size.findById(idSize)
        return res.status(200).json(getRes(0, { data: size}))
    } catch (err) {
        return res.status(400).json(getRes(100, { error: err.message }))
    }
}

exports.updateSize = async (req, res) => {
    try {
        
    } catch (err) {
        return res.status(400).json(getRes(100, { error: err.message }))
    }
}

exports.deleteSize = async (req, res) => {
    try {
        
    } catch (err) {
        return res.status(400).json(getRes(100, { error: err.message }))
    }
}