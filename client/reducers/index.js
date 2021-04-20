import { combineReducers } from 'redux'

import highscores from './highscores'
import GameRedirect from './GameRedirect'
import menuRedirect from './menuRedirect'

export default combineReducers({
  highscores,
  GameRedirect,
  menuRedirect
})
