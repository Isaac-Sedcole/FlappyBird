exports.up = function (knex) {
    return knex.schema.createTable('highscores', table => {
      table.increments('id')
      table.string('name')
      table.integer('highscore')
    })
  }
  
  exports.down = function (knex) {
    return knex.schema.dropTable('highscores')
  }
  