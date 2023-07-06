// eslint-disable-next-line no-unused-vars
import React from 'react'
import './App.css'
import Navigation from './Components/Navigation'
import Title from './Components/Title'
import Contact from './Components/Contact'
import Services from './Components/Services'
<<<<<<< HEAD
import About from './Components/About';
import Contact from './Components/Contact';
import {Routes, Route } from 'react-router-dom'
import About from './Components/About'
>>>>>>> b9d3847c1e268dffbc73f049b9f0ec68e089ac17

function App() {
  return (
    <>

      <Navigation/>
          <Routes>
            <Route path='/' element={<Title/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/about' element={<About/>}/>
          </Routes>
    </>
  )
}

export default App
