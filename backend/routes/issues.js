const router = require('express').Router({mergeParams: true})
const Issue = require('../models/issues.model')

router.route('/').get((req, res) => {
  Issue.find( { parentProject: req.params.projectId } )
    .then(projects => res.json(projects))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
  const title = req.body.title
  const description = req.body.description
  const parentProject = req.params.projectId

  const newIssue = new Issue({
    title,
    description,
    parentProject
  })

  newIssue.save()
    .then(() => res.json('Project added'))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:issueId').get(async (req, res) => {
  const issue = await Issue.find( { _id: req.params.issueId } )
  res.json(issue)
})

module.exports = router
