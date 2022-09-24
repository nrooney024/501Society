const mongoose = require('mongoose')
const User = require('./User').schema

const LearningResourcesSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
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
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
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
    type: mongoose.Schema.Types.ObjectId,
    ref: "LearningResourcesSchema",
  },
})


module.exports = mongoose.model('LearningStack', LearningStackSchema)
