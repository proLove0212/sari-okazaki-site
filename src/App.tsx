import React, { useState } from 'react';

//Components
import Header from './Components/Header/Header'
import Welcome from './Components/Welcome/Welcome'
import Profile from './Components/Profile/Profile'
import Videos from './Components/Videos/Videos'
import Performance from './Components/Performance/Performance'
import LessonTitle from './Components/Lesson Title/LessonTitle'
import LessonInfo from './Components/Lesson Info/LessonInfo'
import BigPicture from './Components/Big Picture/BigPicture'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

//Styles



const App = () => {

  const [ menuOpen, setMenuOpen ] = useState(true)
  const [ clicked, setClicked ] = useState(false)

  const justClicked = () => {
    setClicked(true)
    setTimeout(() => {setClicked(false)},
    1000)
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
    justClicked()
  }

  return (
    <div>
      <Header menuOpen={menuOpen} toggleMenu={toggleMenu} clicked={clicked}/>
      <Welcome />
      <Profile />
      <Videos />
      <Performance />
      <LessonTitle />
      <LessonInfo />
      <BigPicture />
      <Contact />
      <Footer />

    </div>
  )
}

export default App;
