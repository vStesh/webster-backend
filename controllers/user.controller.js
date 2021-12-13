const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { getRes } = require('../service/getResponse');

// exports.getAll = async (req, res) => {
//     try {
//         const users = await User.find()
//         return res.status(201).json({ message: 'OK', data: users });
//     } catch (err) {
//         return res.status(401).json(getRes({ error: err.message }))
//     }
// }

exports.updatedData = async (req, res) => {
    try {
        const idUser = req.params.id;
        const user = await User.findById(idUser);
        if (!user || !idUser) {
            return res.status(404).json(getRes(2, { message: 'User not found' }));
        }
        const dataForUpdate = req.body
        const checkForEmail = await User.findOne({ email: dataForUpdate.email })
        const checkPassword = await bcrypt.compare(dataForUpdate.password, user.password)
        if (checkForEmail || checkPassword) {
            return res.status(404).json(getRes(23, { message: 'This email is already taken or new password coincides with the old' }));
        } else {
            const hashPassword = await bcrypt.hash(dataForUpdate.password, 13)
            await User.updateOne({ email: dataForUpdate.email, password: hashPassword, name: dataForUpdate.name })
            return res.status(201).json(getRes(0, { message: 'User data successfully changed' }))
        }
    } catch (err) {
        return res.status(401).json(getRes({ error: err.message }))
    }
}