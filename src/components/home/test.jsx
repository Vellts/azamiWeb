import React, { useState, Fragment } from 'react'

const Test = () => {

  const [active, setActive] = useState(false)

  const handleToggle = () => {
    setActive(!active)
  }

  return (

    <div>
    <button onClick={handleToggle}>{active ? "Close" : "Open"}</button>
    <h1 className={`${active ? "hidden" : ""}`}>xd</h1>
    </div>
  
  )
}

export default Test
