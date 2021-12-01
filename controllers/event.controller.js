const {getRes} = require('../service/getResponse')

exports.getAllEvents = async (req, res) => {
    try {
        return res.status(200).json(getRes({message: 'Events was successfully received'}))
    } catch (err) {
        console.log(err);
    }
}

exports.getEvent = async (req, res) => {
    try {
        return res.status(200).json(getRes({message: 'Event was successfully received'}))
    } catch (err) {
        return res.status(400).json(getRes({error: err.message}))
    }
}

exports.createEvent = async (req, res) => {
    try {
        return res.status(200).json(getRes({message: 'Event was successfully created'}))
    } catch (err) {
        return res.status(400).json(getRes({error: err.message}))
    }
}
exports.editEvent = async (req, res) => {
    try {
        return res.status(200).json(getRes({message: 'Event was successfully edited'}))
    } catch (err) {
        return res.status(400).json(getRes({error: err.message}))
    }
}
exports.deleteEvent = async (req, res) => {
    try {
        return res.status(200).json(getRes({message: 'Event was successfully deleted'}))
    } catch (err) {
        return res.status(400).json(getRes({error: err.message}))
    }
}