const tokenService = require('../service/token-service')
const { getRes } = require('../service/getResponse');

module.exports = function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*"    );
    next();
}