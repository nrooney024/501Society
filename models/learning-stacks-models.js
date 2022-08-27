const mongoose = require('mongoose')

const LearningStackSchema = new mongoose.Schema({
  learningStackName: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: Date,
  },
  dateLastOpened: {
    type: Date,
    default: Date.now
  },
  learningStackList: {
    type: Array
  }
})

module.exports = mongoose.model('LearningStack', LearningStackSchema)
