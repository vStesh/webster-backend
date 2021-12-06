// const {Router} = require('express');
// const { index, register } = require('../controllers/http.controller');
// const { check, validationResult } = require('express-validator');
// const {MIN_LENGTH_PASSWORD} = require('../config').VALIDATE;
// const {MIN_LENGTH_PASSWORD} = require('../../config').VALIDATE;
// const {JWT_SECRET} = require('../../config')

// const router = Router();

// router.post('/auth/register',[
//     check('email', 'Некорректный email').isEmail(),
//     check('password', `Минимальная длинна пароля ${MIN_LENGTH_PASSWORD} символов`)
//         .isLength({min: MIN_LENGTH_PASSWORD})
// ], register);

// router.get('/', index);

// module.exports = router;