const mongoose = require('mongoose')

const LearningResourcesSchema = new mongoose.Schema({
  learningResourceName: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now
  },
  dateLastOpened: {
    type: Date,
  },
  urlToResource: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
  },
  importantLinks: {
    type: [String],
  },
  reminderDates: {
    type: [Date],
  },
})


const LearningStackSchema = new mongoose.Schema({
  learningStackName: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now
  },
  dateLastOpened: {
    type: Date,
  },
  learningResourcesList: {
    type: [LearningResourcesSchema]
  }
})


module.exports = mongoose.model('LearningStack', LearningStackSchema)
