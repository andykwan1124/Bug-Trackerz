const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 5
  },
  description: {
    type: String,
    unique: true,
    trim: true,
    minlength: 5
  }
})

const Users = mongoose.model('User', userSchema)

module.exports = Users
