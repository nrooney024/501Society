const express = require('express')
const router = express.Router()
const learningStacksControllers = require('../controllers/learning-stacks-controllers')
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, learningStacksControllers.getLearningStacks)

router.post('/createLearningStack', learningStacksControllers.createLearningStack)

// router.put('/markComplete', todosController.markComplete)

// router.put('/markIncomplete', todosController.markIncomplete)

// router.delete('/deleteTodo', todosController.deleteTodo)

module.exports = router