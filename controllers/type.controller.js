const Type = require('../models/Type');
const { getRes } = require('../service/getResponse');

exports.createType = async (req, res) => {
    try {
        
    } catch (err) {
        return res.status(400).json(getRes(100, { error: err.message }))
    }
}

exports.getType = async (req, res) => {
    try {
        const idType = req.params
        const type = await Type.findById(idType)
        return res.status(200).json(getRes(0, { data: type }))
    } catch (err) {
        return res.status(400).json(getRes(100, { error: err.message }))
    }
}

exports.updateType = async (req, res) => {
    try {
        
    } catch (err) {
        return res.status(400).json(getRes(100, { error: err.message }))
    }
}

exports.deleteType = async (req, res) => {
    try {
        
    } catch (err) {
        return res.status(400).json(getRes(100, { error: err.message }))
    }
}