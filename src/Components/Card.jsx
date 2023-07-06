// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import './Card.css'

const Card = (props) => {
    const img = props.image
    const [isClicked, setClicked] = useState(false);

    const handleBuyClick = () => {
      setClicked(true);
    };
  
    const handleRemoveClick = () => {
      setClicked(false);
    };
  return (
    <>
    
    {/* <!--Servics Cards--> */}
    <section>
        <div className="wrapper">
            <div className="container">
              <div className="top">
                <img src={img} alt="image" className='top-inner'/>
              </div>
              <div className={`bottom ${isClicked ? 'clicked' : ''}`}>
                <div className="left">
                  <div className="details">
                    <h1 className='Service'>{props.service}</h1>
                    <p className='Price'>{props.price}</p>
                  </div>
                  {/* <div className="buy" onClick={handleBuyClick}><i className="material-icons">add_shopping_cart</i></div> */}
                </div>
                {/* <div className="right">
                  <div className="done"><i className="material-icons">done</i></div>
                  <div className="details">
                    <h1>Chair</h1>
                  </div>
                  <div className="remove" onClick={handleRemoveClick} ><i className="material-icons">clear</i></div>
                </div> */}
              </div>
            </div>
            <div className="inside">
              <div className="icon"><i className="material-icons">Details</i></div>
              <div className="contents">
                <p className='info'>aaaa</p>
              </div>
            </div>
          </div>
    </section>
    </>
  )
}

export default Card