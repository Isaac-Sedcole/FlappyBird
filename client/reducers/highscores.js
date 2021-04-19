import { SET_HIGHSCORES } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HIGHSCORES:
      return action.highscores
    default:
      return state
  }
}

export default reducer
