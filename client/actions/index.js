import { getHighscores } from '../apis/highscores'

export const SET_HIGHSCORES = 'SET_HIGHSCORES'

export function setHighscores (highscores) {
  return {
    type: SET_HIGHSCORES,
    highscores
  }
}

export function fetchHighscores () {
  return dispatch => {
    return getHighscores()
      .then(highscores => {
        dispatch(setHighscores(highscores))
        return null
      })
  }
}
