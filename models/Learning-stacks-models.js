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
  },
  public: {
    type: String,
  },
  dateCreated: {
    type: Date,
    default: Date.now
  },
  dateLastOpened: {
    type: Date,
  },
  learningResourcesList: {
    type: [{type: mongoose.Schema.Types.ObjectId, ref: "LearningResources"}],
  }
})


const LearningStackExport = mongoose.model('LearningStack', LearningStackSchema)
const LearningResourcesExport = mongoose.model('LearningResources', LearningResourcesSchema)

module.exports = {LearningStackExport, LearningResourcesExport}
