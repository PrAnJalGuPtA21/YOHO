import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <div className="home">Home</div>
        <div className="check-status"><Link to="check">Check status</Link></div>
        <div className="raise-complain"><Link to="/">Compalin</Link></div>
    </div>
  )
}

export default Navbar