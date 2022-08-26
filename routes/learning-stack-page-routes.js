const express = require('express')
const router = express.Router()
const learningStackPageControllers = require('../controllers/learning-stack-page-controllers')

router.get('/', learningStackPageControllers.getLearningStackPage)

// router.post('/createTodo', todosController.createTodo)

// router.put('/markComplete', todosController.markComplete)

// router.put('/markIncomplete', todosController.markIncomplete)

// router.delete('/deleteTodo', todosController.deleteTodo)

module.exports = router