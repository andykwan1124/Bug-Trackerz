const router = require('express').Router()
const User = require('../models/users.model')

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
  const username = req.body.username
  const description = req.body.description

  const newUser = new User({
    username,
    description
  })

  newUser.save()
    .then(() => res.json('User added'))
    .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router
