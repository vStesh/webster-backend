const Photo = require('../models/Photo');
const tokenService = require('../service/token-service');
const { getRes } = require('../service/getResponse');

exports.createPhoto = async (req, res) => {
    try {
        const { url, settings, comment } = req.body
        const { refreshToken } = req.cookies
        const tokenData = tokenService.validateRefreshToken(refreshToken)
        if (!tokenData) {
            return res.status(400).json(getRes(31, { message: 'Invalid refresh token' }))
        }
        console.log(tokenData);
        const photo = new Photo({ user: tokenData.id, url, settings, comment })
        await photo.save()
        return res.status(200).json(getRes(0, { message: 'The photo has been successfully created' }))
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
        const idPhoto = req.params
        const dataPhoto = req.body
        const photo = await Photo.findByIdAndUpdate(idPhoto.id, dataPhoto, { new: true })
        return res.status(200).json(getRes(0, { message: 'The photo successfully updated', data: photo}))
    } catch (err) {
        return res.status(400).json(getRes(100, { error: err.message }))
    }
}

exports.deletePhoto = async (req, res) => {
    try {
        const idPhoto = req.params
        const photo = await Photo.findById(idPhoto)
        photo.deletedAt = Date.now()
        await photo.save()
        return res.status(200).json(getRes(0, { message: 'The photo successfully deleted', data: photo}))
    } catch (err) {
        return res.status(400).json(getRes(100, { error: err.message }))
    }
}