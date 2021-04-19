const express = require('express')

const db = require('../db/highscores')

const router = express.Router()

router.get('/', (req, res) => {
  db.getHighscores()
    .then(results => {
      res.json(results)
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

module.exports = router
