import React, { useEffect } from 'react'
import {Route} from 'react-router-dom'
import { connect } from 'react-redux'
import Home from './Home'

import { fetchFruits } from '../actions'

const App = (props) => {
  // useEffect(() => {
  //   props.dispatch(fetchFruits())
  // })

  return (
    <>
      <div>
        <h2>This is the start of the flappy birds js app</h2>

        <Route path= '/' exact component={Home} />
        <Route path= '/game' exact component={Game} />
        <Route path= '/highscores' exact component={Highscores} />
        
      </div>
    </>
  )
}
// const mapStateToProps = (globalState) => {
//   return {
//     fruits: globalState.fruits
//   }
// }

export default connect()(App)
