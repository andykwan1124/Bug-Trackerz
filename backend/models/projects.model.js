const mongoose = require('mongoose')

const Schema = mongoose.Schema

const projectSchema = new Schema({
  title: {
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
    required: true
  }
})

// The first argument in mongoose.model is the singular name of the collection your model is for. 
// Mongoose automatically looks for the plural, lowercased version of your model name.
// Thus, for the example above, the model Tank is for the tanks collection in the database.

const Project = mongoose.model('Project', projectSchema)

module.exports = Project
