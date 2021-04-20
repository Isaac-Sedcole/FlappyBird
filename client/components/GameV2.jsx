import React, { useEffect } from 'react'
import { connect } from 'react-redux'


import { fetchFruits } from '../actions'

const GameV2 = (props) => {
  // useEffect(() => {
  //   props.dispatch(fetchFruits())
  // })

  useEffect(() => {
    props.dispatch(setRedirectGame(false))
  },[])

  const handleNavMenu = () => {
    props.dispatch(setRedirectMenu(true))
  }

  return (
    <>
      <div>
        <h3>this is the GameV2 page</h3>
        <button onClick={handleNavMenu}>Menu</button>
      </div>
    </>
  )
}
  const mapStateToProps = (globalState) => {
    return {
      menuRedirect: globalState.menuRedirect
    }
  }

export default connect(mapStateToProps)(GameV2)
