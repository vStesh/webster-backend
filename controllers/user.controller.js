const bcrypt = require('bcryptjs');
const User = require('../models/User');
const tokenService = require('../service/token-service');
const fileService = require('../service/file-service');
const { getRes } = require('../service/getResponse');


exports.getAll = async (req, res) => {
    try {
        const users = await User.find()
        if (!users) {
            return res.status(404).json(getRes(4, { message: 'Users not found' }))
        }
        return res.status(201).json(getRes(0, { data: users }))
    } catch (err) {
        return res.status(401).json(getRes(100, { error: err.message }))
    }
}

exports.updatedData = async (req, res) => {
    try {
        const idUser = req.params.id;
        const { photo } = req.files
        const fileSave = fileService.saveAvatar(photo)
        const user = await User.findById(idUser);
        if (!user) {
            return res.status(404).json(getRes(2, { message: 'User not found' }));
        }
        const dataForUpdate = req.body
        const checkPassword = await bcrypt.compare(dataForUpdate.password, user.password)
        if (checkPassword) {
            return res.status(404).json(getRes(23, { message: 'This new password coincides with the old' }));
        } else {
            const hashPassword = await bcrypt.hash(dataForUpdate.password, 13)
            const data = await User.findByIdAndUpdate({ _id: user._id }, { password: hashPassword, name: dataForUpdate.name, photo: fileSave }, { new: true })
            return res.status(201).json(getRes(0, { message: 'User successfully changed data', data: data }))
        }
    } catch (err) {
        return res.status(401).json(getRes(100, { error: err.message }))
    }
}

exports.deletedData = async (req, res) => {
    try {
        const idUser = req.params.id
        const { refreshToken } = req.cookies
        const userData = tokenService.validateRefreshToken(refreshToken)
        const user = await User.findById(idUser)
        if (!user) {
            return res.status(404).json(getRes(2, { message: 'User not found' }));
        }
        const tokenModel = await Token.findOneAndDelete({ user: userData.id })
            if (!tokenModel) {
                return res.status(400).json(getRes(30, {message: 'Token not generated'}))
            }
            user.deleteAt = Date.now()
            res.clearCookie('refreshToken')
            return res.status(200).json(getRes(0, { message: 'User has been successfully deleted', data: user }))
    } catch (err) {
        return res.status(401).json(getRes(100, { error: err.message }))
    }
}