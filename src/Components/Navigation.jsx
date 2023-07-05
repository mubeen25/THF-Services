// eslint-disable-next-line no-unused-vars
import React from 'react'
import './navigation.css'
import Logo from '../assets/logo-hunar.png'

const Navigation = () => {
  return (
    <>
     {/* <!--Navigation--> */}
    <section>
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark navigation">
            <div className="container-fluid">
                <a className="navbar-brand" href="Home.html"><img className="hunar-logo" src={Logo} alt="logo"/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <a className="nav-link active" aria-current="page" href="Index.html">Services</a>
                        <a className="nav-link" href="Biography.html">About</a>
                        <a className="nav-link" href="">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    </section>
    </>
  )
}

export default Navigation