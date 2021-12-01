const Organizer = require('../models/Organizer');
const User = require('../models/User');
const tokenService = require('../service/token-service');
const { getRes } = require('../service/getResponse');

exports.createdOrganization = async (req, res) => {
    try {
        const { refreshToken } = req.cookies
        const { email, name, description } = req.body
        const userData = tokenService.validateRefreshToken(refreshToken)
        const user = await User.findById(userData.id)
        const organization = await Organizer.findOne({email})
        if (organization) {
            return res.status(401).json(getRes({message: 'This email is already exists in another organization'}))
        }
        const createOrganization = new Organizer({ email, owner: user.id, name, description })
        await createOrganization.save()
        return res.status(200).json(getRes({ message: 'Organization was successfully created' }))
    } catch (err) {
        return res.status(401).json(getRes({ error: err.message }))
    }
}
exports.getAllOrganizations = async (req, res) => {
    try {
        const organizations = await Organizer.find()
        return res.status(200).json(getRes({data: organizations}))
    } catch (err) {
        return res.status(401).json(getRes({ error: err.message }))
    }
}

exports.getOneOrganization = async (req, res) => {
    try {
        const idOrganization = req.params.id
        const organization = await Organizer.findOne({_id: idOrganization})
        return res.status(200).json(getRes({message: 'Organization was received ', data: organization}))
    } catch (err) {
        return res.status(401).json(getRes({ error: err.message }))
    }
}

exports.editOrganization = async (req, res) => {
    try {
        const idOrganization  = req.params.id
        const updatedData = req.body
        const checkOwner = { owner: idOrganization }
        const organization = await Organizer.findOneAndUpdate(checkOwner, updatedData, {new: true})
        if (!organization) {
            return res.status(401).json(getRes({ message: 'Organization not found or you not owner this organization' }))
        } else {
            return res.status(200).json(getRes({message: 'Your organization was successfully updated', data: organization}))
        }        
    } catch (err) {
        return res.status(401).json(getRes({ error: err.message }))
    }
}

exports.deleteOrganization = async (req, res) => {
    try {
        const idOrganization = req.params.id
        const user = await User.findById(idOrganization)
        const checkOwner = { owner: user.id }
        const organization = await Organizer.findOne({checkOwner})
        if (!user || !organization) {
            return res.status(401).json(getRes({ message: 'Organization not found or you not owner this organization' }))
        } else {
            organization.delete = true
            await organization.save()
            return res.status(200).json(getRes({message: 'Your organization was successfully deleted', data: organization}))
        }        
    } catch (err) {
        return res.status(401).json(getRes({ error: err.message }))
    }
}
