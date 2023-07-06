// eslint-disable-next-line no-unused-vars
import React from 'react'
import './App.css'
import Navigation from './Components/Navigation'
import Title from './Components/Title'
import Contact from './Components/Contact'
// import Title from './Components/Title'
import Services from './Components/Services'

function App() {
  return (
    <>
      <Navigation/>
      {/* <Title/> */}
      <Contact/>
      <Services/>
    </>
  )
}

export default App
