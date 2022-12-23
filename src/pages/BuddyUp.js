import React from 'react'

function BuddyUp() {
  return (
    <div className="food">
      <div>
        <h1>BuddyUp</h1>
      </div>
      <section className="foodDiaryContent">
        <div>
          <img
            className="foodDiary"
            src="./images/buddupdatailphoto.png"
            alt="buddyUpcover"
          />
        </div>
        <div className="FoodDescription">
          <h2> DESCRIPTION</h2>
          <p>
            Was there any activity that you wanted to do but just didn't have
            anyone to go with? Well, BuddyUp was specifically tailored for those
            moments. My team and I built this app from scratch for the sole
            purpose of eliminating that feeling from a persons life. The purpose
            of the app is to see an activity, and match with other users that
            are interested in the same activity. Once there is a match, all of
            the contact information will be available for the user. In addition
            to viewing all of the activities, the user has the option to also
            add, update or delete an event they added. Enjoy the app!
          </p>
          <h2>BUILT WITH</h2>
          <p>POSTGRESQL, EXPRESS, REACT, NODE, CSS</p>
        </div>
      </section>
      <div className="projectWebsite">
        <button className="cites">
          <a href="https://buddy-match-up.herokuapp.com/">Visit Website</a>
        </button>
        <button className="cites">
          <a href="https://github.com/kalenluciano/buddy-up-frontend">
            See Code
          </a>
        </button>
      </div>
    </div>
  )
}

export default BuddyUp
