import React from 'react'
import '../styling/nav.css'

function Nav() {
  return (
    <nav className="nav">
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/aboutMe">About</a></li>
        </ul>
    </nav>
  )
}

export default Nav