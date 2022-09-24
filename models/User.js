const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const LearningStackSchema = require('./Learning-stacks-models').schema

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  learningStackArray: {
    type: [LearningStackSchema],
    required: true
  },
  learningStackArray: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "LearningStack",
  },
  uniqueDatesLoggedIn: {
    type: [String],
    required: true,
  }
})



// Password hash middleware.
 
 UserSchema.pre('save', function save(next) {
  const user = this
  if (!user.isModified('password')) { return next() }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) { return next(err) }
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) { return next(err) }
      user.password = hash
      next()
    })
  })
})


// Helper method for validating user's password.

UserSchema.methods.comparePassword = function comparePassword(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    cb(err, isMatch)
  })
}


module.exports = mongoose.model('User', UserSchema)
