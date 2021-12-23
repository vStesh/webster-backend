const Photo = require('../models/Photo');
const { getRes } = require('../service/getResponse');

exports.createPhoto = async (req, res) => {
    try {
        
    } catch (err) {
        return res.status(400).json(getRes(100, { error: err.message }))
    }
}

exports.getPhoto = async (req, res) => {
    try {
        const idPhoto = req.params
        const photo = await Photo.findById(idPhoto)
        return res.status(200).json(getRes(0, { data: photo}))
    } catch (err) {
        return res.status(400).json(getRes(100, { error: err.message }))
    }
}

exports.updatePhoto = async (req, res) => {
    try {
        
    } catch (err) {
        return res.status(400).json(getRes(100, { error: err.message }))
    }
}

exports.deletePhoto = async (req, res) => {
    try {
        
    } catch (err) {
        return res.status(400).json(getRes(100, { error: err.message }))
    }
}