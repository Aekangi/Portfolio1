import React from 'react'
import '../styling/foodDiaryPage.css'

function FoodDiary() {
  return (
    <div className="food">
      <div>
        <h1>FOOD DIARY</h1>
      </div>
      <section className="foodDiaryContent">
        <div>
          <img
            className="foodDiary"
            src="./images/food.png"
            alt="fooddiarycover"
          />
        </div>
        <div className="FoodDescription">
          <h2> DESCRIPTION</h2>
          <p>
            Food Diary is an application designed to provide food recipes and
            mocktail recipes for everyday dinners. This app allows a user to
            view, add, update, and delete recipes. This project was solely built
            by myself. I understand that there are so many food apps already out
            there. What sets this app apart from the other apps is the fact that
            it's a one stop all app. Unlike other apps that only show recipes
            for either the food or drinks, this app lets you view both. Also the
            convenience of this app is that they are divided into their own
            sections. One tab leads you to food recipes while the other tab
            takes the user to mocktail concoctions. This app was designed to be
            family-friendly so none of the recipe use alcohol. I hope u enjoy
            the app!
          </p>
          <h2>BUILT WITH</h2>
          <p>MONGOOSE, EXPRESS, REACT, NODE, CSS</p>
        </div>
      </section>
      <div className="projectWebsite">
        <button className="cites">
          <a href="https://fooddiary82.herokuapp.com/">Visit Website</a>
        </button>
        <button className="cites">
          <a href="https://github.com/Aekangi/FoodDiaries">See Code</a>
        </button>
      </div>
    </div>
  )
}

export default FoodDiary
