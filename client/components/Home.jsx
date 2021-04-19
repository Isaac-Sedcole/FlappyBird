import React, { useEffect } from 'react'
import { connect } from 'react-redux'


import { fetchFruits } from '../actions'

const Home = (props) => {
  // useEffect(() => {
  //   props.dispatch(fetchFruits())
  // })

  return (
    <>
      <div>
        <h3>this is the homepage</h3>
      </div>
    </>
  )
}
// const mapStateToProps = (globalState) => {
//   return {
//     fruits: globalState.fruits
//   }
// }

export default connect()(Home)
