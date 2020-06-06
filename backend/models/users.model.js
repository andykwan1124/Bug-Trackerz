const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 1
  },
  description: {
    type: String,
    unique: true,
    trim: true,
    minlength: 5
  }
})

const Users = mongoose.model('Users', userSchema)

module.exports = Users
