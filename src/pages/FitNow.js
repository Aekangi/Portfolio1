import React from 'react'

function FitNow() {
  return (
    <div className="food">
      <div>
        <h1>FitNow</h1>
      </div>
      <section className="foodDiaryContent">
        <div>
          <img
            className="foodDiary"
            src="./images/fitNowExercise.png"
            alt="fitNowcover"
          />
        </div>
        <div className="FoodDescription">
          <h2> DESCRIPTION</h2>
          <p>
            It's time to take control of your health today. After a hard day at
            work, the last thing you want to think about is what to eat and
            which exercises to follow. Well, here on FitNow, we've got you
            covered! FitNow is designed for those individuals that would like to
            get fit through exercises and diet plans. FitNow has well designed
            dinner plans for each day of the week. Think no more and start
            scrolling through the app to see what works for you!
          </p>
          <h2>BUILT WITH</h2>
          <p>POSTGRESQL, EXPRESS, REACT, NODE, CSS</p>
        </div>
      </section>
      <div className="projectWebsite">
        <button className="cites">
          <a href="https://main.d1pe52f8thbmyf.amplifyapp.com/">
            Visit Website
          </a>
        </button>
        <button className="cites">
          <a href="https://github.com/Aekangi/FitNow-FrontEnd">See Code</a>
        </button>
      </div>
    </div>
  )
}

export default FitNow
