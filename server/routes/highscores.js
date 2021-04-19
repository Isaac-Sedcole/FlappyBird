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
      res.status(500).json({ message: 'Somthing went wrong when getting highscores' })
    })
})

router.get('/:id', (req, res) => {
    db.getUser(req.params.id)
        .then(result => {
            res.json(result)
            return null
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: "Something went wrong when getting user"})
        })
})

router.post('/', (req, res) => {
    db.addUser(req.body)
        .then(id => {
            res.json(id)
            return null
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: "Something went wrong when adding a user/highscore"})
        })
})

module.exports = router
