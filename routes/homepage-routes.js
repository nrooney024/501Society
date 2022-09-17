const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home-controllers')

router.get('/homepage', homeController.getIndex) 

module.exports = router