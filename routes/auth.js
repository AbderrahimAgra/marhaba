const express = require('express')
const router = express.Router()

const {register,login, forgetPassword,resetPassword,verifyEmail} = require('../controllers/authController')


router.post('/register', register)
router.get('/register/verify/:token', verifyEmail)
router.post('/login', login)
router.post('/forgetpassword', forgetPassword)
router.post('/resetpassword/:token', resetPassword)

module.exports = router;