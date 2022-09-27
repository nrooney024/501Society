const express = require('express')
const router = express.Router()
const learningStacksControllers = require('../controllers/learning-stacks-controllers')
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, learningStacksControllers.getLearningStacks)

router.post('/createLearningStack', learningStacksControllers.createLearningStack)

router.delete('/deleteLearningStack/:id', learningStacksControllers.deleteLearningStack)

module.exports = router