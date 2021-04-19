const connection = require('./connection')

function getHighscores (db = connection) {
  return db('highscores').select()
}

function addHighscore(user, db = connection) {
  return db('highscores')
    .insert(user)
}

function getUser(name, db=connection) {
  return db('highscores')
    .where("name", name)
    .first()
    .select()
}

module.exports = {
  getHighscores,
  addHighscore,
  getUser
}
