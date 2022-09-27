const express = require('express')
const router = express.Router()
const learningStackPageControllers = require('../controllers/learning-stack-page-controllers')
const { ensureAuth } = require('../middleware/auth')

router.get('/:id', ensureAuth, learningStackPageControllers.getLearningStackPage)

router.post('/createLearningResource/:id', learningStackPageControllers.createLearningResource)

router.delete('/deleteLearningResource/:id', learningStackPageControllers.deleteLearningResource)

module.exports = router