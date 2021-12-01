module.exports = function (req, res, next) {
    try {
        
        next()
    } catch (err) {
        return res.status(403)
    }
}