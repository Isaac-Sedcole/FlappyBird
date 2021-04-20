import { getHighscores } from '../apis/highscores'

export const SET_HIGHSCORES = 'SET_HIGHSCORES'
export const SET_REDIRECT_GAME = "SET_REDIRECT_GAME"
export const SET_REDIRECT_MENU = "SET_REDIRECT_MENU"


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

export function setRedirectGame(bool) {
  return {
    type: SET_REDIRECT_GAME,
    bool
  }
}

export function setRedirectMenu(bool) {
  return {
    type: SET_REDIRECT_MENU,
    bool
  }
}
