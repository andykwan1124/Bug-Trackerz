const mongoose = require('mongoose')

const Schema = mongoose.Schema

// When changing schema fields, might need to drop index on Atlas console
const issueSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
  },
  description: {
    type: String,
    trim: true,
    required: true
  },
//   parentProject: { type: Schema.Types.ObjectId, ref: 'Project'}
  parentProject: { type: String }
})

// The first argument in mongoose.model is the singular name of the collection your model is for. 
// Mongoose automatically looks for the plural, lowercased version of your model name.
// Thus, for the example above, the model Tank is for the tanks collection in the database.

const Issue = mongoose.model('Issue', issueSchema)

module.exports = Issue
