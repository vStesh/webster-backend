const OrganizerSchema = require('../models/Organizer');
const UserSchema = require('../models/User');
const tokenService = require('../service/token-service');
const { getRes } = require('../service/getResponse');

module.exports = async function (req, res, next) {
    try {
        const { refreshToken } = req.cookies
        if (!refreshToken) {
            return res.status(403).json(getRes({ message: 'Token not found' }));
        }
        const userData = tokenService.validateRefreshToken(refreshToken)
        const user = await UserSchema.findOne({_id: userData.id})
        const organization = await OrganizerSchema.findOne({ owner: userData.id })
        if (organization) {
            return res.status(401).json(getRes({message: "You can't have two or more organizations"}))
        } else {
            req.user = user   
        }
        next()
    } catch (err) {
        return res.status(400).json(getRes({error: err.message}))
    }
}