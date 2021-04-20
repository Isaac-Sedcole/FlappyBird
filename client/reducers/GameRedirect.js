import { SET_REDIRECT_GAME } from '../actions'

const initialState = false

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REDIRECT_GAME:
      return action.bool
    default:
      return state
  }
}

export default reducer
