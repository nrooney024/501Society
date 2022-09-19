const express = require('express')
const router = express.Router()
const mainController = require('../controllers/main-controllers')
const authController = require('../controllers/auth')

router.get('/', mainController.getIndex) 
// router.get('/login', authController.getLogin)
// router.post('/login', authController.postLogin)
// router.get('/logout', authController.logout)
// router.get('/signup', authController.getSignup)
// router.post('/signup', authController.postSignup)

module.exports = router