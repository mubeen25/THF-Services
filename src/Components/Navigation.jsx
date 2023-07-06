// eslint-disable-next-line no-unused-vars
import React from 'react'
import './navigation.css'
import Logo from '../assets/logo-hunar.png'
import { Link, useLocation } from 'react-router-dom'


/* Notes:
    
--> To implement router, all the <a/> tags must be changed to <Link/> component tag which is a built-in utility from 
react-router-dom. 
--> we change the <a/> tags to <Link/> tag. <Link/> tag uses a property called 'to' which is an equivalent to 'href'
of an <a/> tag and likewise it accepts a url or link as parameter. 
--> The link to be given in the to section is defined in app.jsx under the router's section where each route is defined.
these linkes are thus called 'routes' in the development community.

--> Lastly, we use the useLocation hook to know on which page we are, and accordingly change the acive class in the 
navigation dynamically whenever a page is changed
*/
const Navigation = () => {
    const location = useLocation();
  return (
    <>
     {/* <!--Navigation--> */}
    <section>
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark navigation">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img className="hunar-logo" src={Logo} alt="logo"/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <Link className={location.pathname === '/services' ? 'nav-link active' : 'nav-link '} aria-current="page" to="/services">Services</Link>
                        <Link className={location.pathname === '/about' ? 'nav-link active' : 'nav-link '} to="/about">About</Link>
                        <Link className={location.pathname === '/contact' ? 'nav-link active' : 'nav-link '} to="/contact">Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    </section>
    </>
  )
}

export default Navigation