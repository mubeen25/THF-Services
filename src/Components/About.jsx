// eslint-disable-next-line no-unused-vars
import React from 'react'
import './About.css'
import RAAS from '../assets/raas.jpg'

const About = () => {
  return (
    <>
      <div className="container con">
        <div className="row">
          <div className="col-lg-6 left">
            <img className='img-fluid' src={RAAS} alt="" />
          </div>
          <div className="col-lg-6 right">
            <p>THF has added its campuses in: <br />

              Rashidabad, Tando Allahyar <br />
              Bedian Road, Lahore <br />
              Pak Arab Fertilizer, Multan <br />
              GT Road, Kharian <br />
              Saddar, Karachi <br />

              In 2020 our Flagship Korangi Complex came into existence having Teachers Training Center, male and female institutes offering Health Alliances to Emerging Technology Programs, Call Center Training and various other courses.
              THF key objective is to provide school graduates and other young adults with international standard vocational training that meets the expectations of the market, leading to employment or small business creation - and eventually economic freedom and empowerment. THF offers this opportunity to the underprivileged and marginalized segments of society where the need is more urgent.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About