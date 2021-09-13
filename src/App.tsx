import React, { useState, useEffect } from 'react';

//Components
import Header from './Components/Header/Header'
import Welcome from './Components/Welcome/Welcome'
import Profile from './Components/Profile/Profile'
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
  const [ atHomeScreen, setAtHomeScreen ] = useState(true)
  const [ scrolled, setScrolled ] = useState(false)

  const justClicked = () => {
    setClicked(true)
    setTimeout(() => {setClicked(false)},
    1000)
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
    justClicked()
  }

  const closeMenu = () => {
    setMenuOpen(true)
    justClicked()
  }

  useEffect(() => {
  
    window.onscroll = () => {
      if (window.scrollY >= (window.innerHeight - 150)) {
        setAtHomeScreen(false)
        setScrolled(true)
      }
      if (window.scrollY < (window.innerHeight - 150)) {
        setAtHomeScreen(true)
      }
    }
  }, [atHomeScreen])

  return (
    <div>
      <Header menuOpen={menuOpen} toggleMenu={toggleMenu} clicked={clicked} atHomeScreen={atHomeScreen} scrolled={scrolled} closeMenu={closeMenu}/>
      <Welcome menuOpen={menuOpen} toggleMenu={toggleMenu} clicked={clicked} closeMenu={closeMenu}/>
      <Profile />
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
