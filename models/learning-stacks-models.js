const mongoose = require('mongoose')

const LearningStackSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  }
})

module.exports = mongoose.model('LearningStack', LearningStackSchema)
