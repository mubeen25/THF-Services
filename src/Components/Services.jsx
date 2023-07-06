// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Services.css';
import Card from './Card';
// import ImageOne from '../assets/Developer.jpg'

const Services = () => {

    return (
        <>
            <h1 className='Heading'>Our Services</h1>
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <Card
                        // style={{
                        //     backgroundImage: `URL(${ImageOne})`,
                        //     backgroundSize: 'cover',
                        //     backgroundPosition: 'center',
                        //     width: '100%',
                        //     height: '100%',
                        // }
                        // }
                        service="Web Developer"
                        price="20,000 PKR"
                    />
                </div>
                <div className="col-lg-4 col-md-6">
                    <Card
                        service="GraphicsDesigner"
                        price="20,000 PKR"
                    />
                </div>
                <div className="col-lg-4 col-md-6">
                    <Card
                        service="Video Artist"
                        price="20,000 PKR"
                    />
                </div>
            </div>
        </>
    )
}

export default Services