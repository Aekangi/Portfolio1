import React from 'react'
import '../styling/about.css'

function aboutMe() {
  return (
    <div className="aboutPage">
      <div className="about">
        <section className="about">
          <div className="infoName">
            <h1>About Me</h1>
          </div>
          <div className="info">
            <p>
              I am a software developer with an eye for details. My previous
              experience as a baker has taught me how to appreciate every
              component that goes into making a masterpiece — and how to do that
              while working collaboratively with others in fast-paced,
              deadline-driven environments. Coder by day and baker by night, I
              am excited to contribute my skills in team management, designing,
              and coding with my adaptability, creativity, and people skills to
              help companies solve problems and achieve their goals.
            </p>
          </div>
          <div className="contactInfo">
            <h3>Follow me on</h3>
            <div>
              <a href="https://github.com/Aekangi">Github</a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/aekangipatel/">LinkedIn</a>
            </div>
          </div>
          <div>
            <a
              href="/images/Aekangi_Patel_Resume.pdf"
              download="AekangiPatel-resume"
            >
              Download Resume
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

export default aboutMe
