const express = require('express')
const router = express.Router()
const learningStackPageControllers = require('../controllers/learning-stack-page-controllers')
const { ensureAuth } = require('../middleware/auth')

router.get('/:id', ensureAuth, learningStackPageControllers.getLearningStackPage)

router.post('/createLearningResource/:id', learningStackPageControllers.createLearningResource)

// router.put('/markComplete', todosController.markComplete)

// router.put('/markIncomplete', todosController.markIncomplete)

// router.delete('/deleteTodo', todosController.deleteTodo)

module.exports = router