const Paper = require('../models/Paper');
const { getRes } = require('../service/getResponse');

exports.createPaper = async (req, res) => {
    try {
        
    } catch (err) {
        return res.status(400).json(getRes(100, { error: err.message }))
    }
}

exports.getPaper = async (req, res) => {
    try {
        const idPaper = req.params
        const paper = await Paper.findById(idPaper)
        return res.status(200).json(getRes(0, { data: paper}))
    } catch (err) {
        return res.status(400).json(getRes(100, { error: err.message }))
    }
}

exports.updatePaper = async (req, res) => {
    try {
        
    } catch (err) {
        return res.status(400).json(getRes(100, { error: err.message }))
    }
}

exports.deletePaper = async (req, res) => {
    try {
        
    } catch (err) {
        return res.status(400).json(getRes(100, { error: err.message }))
    }
}