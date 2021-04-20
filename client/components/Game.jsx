import React, { useEffect, useState, useRef } from 'react'
import { connect } from 'react-redux'


import { fetchFruits } from '../actions'

const Game = (props) => {
  // useEffect(() => {
  //   props.dispatch(fetchFruits())
  // })

  const canvasHeight = 650
  const canvasWidth = 450
  const ref = useRef(null)
  const canvas = useRef(null)
  let context = null

  const [lift, setLift] = useState(-15)
  const [gravity, setGravity] = useState(0.8)
  const [bird, setBird] = useState( {
    x: 50,
    y: 100,
    radius: 20,
    velocity: 0
  })

  useEffect(() => {
    context = canvas.current.getContext("2d")
    setInterval(()=> {
      update()
      draw()
    }, 1000/60)

  },[bird])

  const update = () => {
    let newVelocity = (bird.velocity + gravity) * 0.9
    setBird({
      x: 50,
      y: Math.max(Math.min(bird.y + newVelocity, canvasHeight - bird.radius), 0),
      velocity: newVelocity,
      radius: 20
    })
  }

  const draw = () => {
    const ctx = context
    ctx.fillStyle = "white"
    ctx.fillRect(0,0, canvasWidth, canvasHeight)
    ctx.fillStyle = "green"
    ctx.beginPath()
    ctx.arc(bird.x, bird.y, bird.radius, 0, 2 * Math.PI)
    ctx.fill()
    ctx.stroke()

  }

  

  return (
    <>
      <div ref={ref}>
        <h3>this is the game page</h3>
        <canvas ref={canvas} width={canvasWidth} height={canvasHeight} />
      </div>
    </>
  )
}
// const mapStateToProps = (globalState) => {
//   return {
//     fruits: globalState.fruits
//   }
// }

export default connect()(Game)
