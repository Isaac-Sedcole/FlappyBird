exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('highscores').del()
    .then(function () {
      // Inserts seed entries
      return knex('highscores').insert([
        { id: 1, name: 'Corey', highscore: 20 },
        { id: 2, name: 'Nelson', highscore: 34 },
        { id: 3, name: 'Timmy', highscore: 12 }
      ])
    })
}
