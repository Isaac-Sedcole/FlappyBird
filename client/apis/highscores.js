import request from 'superagent'

const rootUrl = '/api/v1'

export function getHighscores () {
  return request.get(rootUrl + '/highscores')
    .then(res => {
      return res.body
    })
}

export function addUser(user) {
  return request.post(rootUrl + '/highscores')
  .send(user)
  .then(res => {
    return res.body
  })
}

export function getUser (name) {
  return request.get(rootUrl + '/highscores/' + name)
    .then(res => {
      return res.body
    })
}
