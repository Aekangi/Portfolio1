import React from 'react'
import { Link } from 'react-router-dom'
import '../styling/portfolio.css'

function portfolio() {
  return (
    <div className="portfolio">
      <h1>PORTFOLIO</h1>
      <h3>CLICK ON A PROJECT BELOW FOR MORE INFORMATION</h3>
      <ol className="project">
        <li className="projectCard">
          <Link to="/foodDiary">
            <img src="./images/foodDiary.png" alt="fooddiarycover" />
            Food Diary
          </Link>
        </li>
        <li className="projectCard">
          <Link to="/buddyUp">
            <img src="./images/buddyup.png" alt="fooddiarycover" />
            BuddyUp
          </Link>
        </li>
        <li className="projectCard">
          <Link to="/fitNow">
            <img src="./images/fitnow.png" alt="fooddiarycover" />
            FitNow
          </Link>
        </li>
      </ol>
    </div>
  )
}

export default portfolio
