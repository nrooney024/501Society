const mongoose = require('mongoose')

const LearningStackSchema = new mongoose.Schema({
  learningStack: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: Date,
  },
  dateLastOpened: {
    type: Date,
  },
  learningStackList: {
    type: Array
  }
})

module.exports = mongoose.model('LearningStack', LearningStackSchema)
