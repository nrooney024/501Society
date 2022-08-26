const express = require('express')
const router = express.Router()
const learningStacksControllers = require('../controllers/learning-stacks-controllers')

router.get('/', learningStacksControllers.getLearningStacks)

router.post('/createLearningStack', learningStacksControllers.createLearningStack)

// router.put('/markComplete', todosController.markComplete)

// router.put('/markIncomplete', todosController.markIncomplete)

// router.delete('/deleteTodo', todosController.deleteTodo)

module.exports = router