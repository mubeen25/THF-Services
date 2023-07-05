// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Footer.css'
import Hunar from '../assets/logo-hunar.png'
import Youtube from '../assets/youtube.png'
import Linkedin from '../assets/linkedin.png'
import Facebook from '../assets/facebook.png'
import Instagram from '../assets/instagram.png'
import Twitter from '../assets/twitter.png'

const Footer = () => {
  return (
    <>
    {/* <!-- footer --> */}
    <section>
        <footer>
            <div className="footer-content">
                <div className="row">
                    <div className=" col-lg-3 col-md-6 col-sm-12">
                        <img className="logo-img img-fluid" src={Hunar} alt=""/>
                    </div>
                    <div className=" col-lg-3 col-md-6 col-sm-12">
                        <p style="line-height: 1.3;">The real aim is to act as a catalyst to promote vocational training in Pakistan, raise the bar of technical training in Pakistan with international qualifications and make our graduates employable in Pakistan and abroad.</p>
                    </div>
                    <div className=" col-lg-3 col-md-6 col-sm-12">
                        <div className="list">
                            <p><a href="#">Home</a></p>
                            <p>
                                <a href="#">Institutes</a>
                            </p>
                            <p>
                                <a href="#">About</a>
                            </p>
                            <p>
                                <a href="#">Contact Us</a>
                            </p>
                        </div>
                    </div>
                    <div className=" col-lg-3  col-md-6 col-sm-12">
                        <div className="list2">
                            <h4 className="title2">Head Office</h4>
                            <p style="margin-bottom: 30px;">83/4 Deh Dih, Ibrahim Hyderi Road, Taluka Korangi District, Karachi.
                            </p>
                            <p><a href="">info@hunarfoundation.org</a></p>
                        </div>
                    </div>
                </div>
                <hr style="border: 1.5px solid white;"/>
                <div className="footer-last">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="social">
                                <h3>FIND US:</h3>
                                <a href="#"><img className="youtube img-fluid" src={Youtube} alt=""/></a>
                                <a href="#"><img className="linkedin  img-fluid" src={Linkedin} alt=""/></a>
                                <a href="#"><img className="facebook img-fluid" src={Facebook} alt=""/></a>
                                <a href="#"><img className="twitter img-fluid" src={Twitter} alt=""/></a>
                                <a href="#"><img className="instagram img-fluid" src={Instagram} alt=""/></a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 ">
                            <div className="contact ">
                                <p><span className="contact1">Donor Relations: </span> 0336-8288777</p>
                                <p><span className="contact1">Admission Cell: </span> 0309-2221193</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </section>
    </>
  )
}

export default Footer