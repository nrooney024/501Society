const express = require('express')
const router = express.Router()
const mainController = require('../controllers/main-controllers')
const authController = require('../controllers/auth')
const feedController = require('../controllers/feed-controllers')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', mainController.getIndex) 
router.get('/login', ensureGuest, authController.getLogin)
router.get('/feed', ensureAuth, feedController.getFeed)
router.post('/login', authController.postLogin)
router.get('/logout', authController.logout)
router.get('/signup', ensureGuest, authController.getSignup)
router.post('/signup', authController.postSignup)

module.exports = router