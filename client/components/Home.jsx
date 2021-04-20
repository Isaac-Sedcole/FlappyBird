import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Redirect} from 'react-router-dom'


import { setRedirectGame, setRedirectMenu } from '../actions'

const Home = (props) => {
  useEffect(() => {
    props.dispatch(setRedirectMenu(false))
    // setRedirect(false)
  })

//   const [redirect, setRedirect] = useState(false)

  const handlePlay = () => {
    // setRedirect(true)
    props.dispatch(setRedirectGame(true))
    // setRedirect(false)
  }

  return (
    <>
      <div>
        <h3>this is the homepage</h3>
        <button onClick={handlePlay}>Play!</button>
        {props.GameRedirect && <Redirect to="/game"/>}
      </div>
    </>
  )
}
const mapStateToProps = (globalState) => {
  return {
    GameRedirect: globalState.GameRedirect
  }
}

export default connect(mapStateToProps)(Home)
