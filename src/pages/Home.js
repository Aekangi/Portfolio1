import React from 'react'
import { Link } from 'react-router-dom'
import '../styling/home.css'

function Home() {
  return (
    <div>
      <section className="home">
        <div className="img">
          <img src="./images/profilePhoto.png" alt="myimage" />
        </div>
        <div>
          <h1>AEKANGI PATEL</h1>
          <h2>SOFTWARE DEVELOPER</h2>
          <h3>Building The Future</h3>
          <button className="workbutton">
            <Link to="/portfolio">Explore My Work</Link>
          </button>
        </div>
      </section>
    </div>
  )
}

export default Home
