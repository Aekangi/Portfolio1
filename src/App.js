import './App.css'
import { Routes, Route } from 'react-router'
import Nav from './components/Nav.jsx'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import BuddyUp from './pages/BuddyUp'
import FitNow from './pages/FitNow'
import FoodDiary from './pages/FoodDiary'
import Portfolio from './pages/Portfolio'

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/buddyUp" element={<BuddyUp />} />
          <Route path="/fitNow" element={<FitNow />} />
          <Route path="/foodDiary" element={<FoodDiary />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
