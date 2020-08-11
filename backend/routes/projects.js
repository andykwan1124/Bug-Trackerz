const router = require('express').Router()
const Project = require('../models/projects.model')

router.route('/').get((req, res) => {
  Project.find()
    .then(projects => res.json(projects))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
  const title = req.body.title
  const description = req.body.description

  const newUser = new Project({
    title,
    description
  })

  newUser.save()
    .then(() => res.json('Project added'))
    .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router
