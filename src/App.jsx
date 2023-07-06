// eslint-disable-next-line no-unused-vars
import React from 'react'
import './App.css'
import Navigation from './Components/Navigation'
import Title from './Components/Title'
import Contact from './Components/Contact'
import Services from './Components/Services'
import About from './Components/About';
import {Routes, Route } from 'react-router-dom'


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
