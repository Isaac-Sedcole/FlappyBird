import React, { useEffect, useState, useRef } from 'react'
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom"


import { setRedirectGame, setRedirectMenu } from '../actions'

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
    props.dispatch(setRedirectGame(false))
  },[])

  const handleNavMenu = () => {
    props.dispatch(setRedirectMenu(true))
  }

  useEffect(() => {
    context = canvas.current.getContext("2d")
    setInterval(()=> {
      update()
      draw()
    }, 1000/60)
    //keyCode 32 = spacebar
    document.addEventListener("keydown", e => e.key === "ArrowUp" ? setBird({
      x: 50,
      y: bird.y,
      velocity: bird.velocity + lift,
      radius: 20
    }) : null)
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
        <button onClick={handleNavMenu}>Menu</button>
        <canvas ref={canvas} width={canvasWidth} height={canvasHeight} />
        {props.menuRedirect && <Redirect to="/" />}
      </div>
    </>
  )
}
const mapStateToProps = (globalState) => {
  return {
    menuRedirect: globalState.menuRedirect
  }
}

export default connect(mapStateToProps)(Game)
