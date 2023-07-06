import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <>
        <section className="contact m-5">
            <div className="fs-1 text-uppercase contact-coloring text-center">
                Contact
            </div>
            <div className="row contact-container">
                <div className="col-md form-information">
                    <p className='contact-coloring'>
                        I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                    </p>
                    <p className='contact-coloring'>
                        mail: info@mysite.com
                    </p>
                    <p className='contact-coloring'>
                        dial: 123-456-7890
                    </p>
                </div>
                <div className="col-md form-section">
                    <div className="form-container">
                        <div className="row">
                            <div className="col-md contact-coloring text-center input-container my-4">
                                <label for="inputField">First Name</label>
                                <div class="input-container-inner">
                                    <input type="text" id="inputField" />
                                </div>
                            </div>
                            <div className="col-md contact-coloring text-center input-container my-4">
                                <label for="inputField">First Name</label>
                                <div class="input-container-inner">
                                    <input type="text" id="inputField" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md contact-coloring text-center input-container my-4">
                                    <label for="inputField">Email *</label>
                                    <div class="input-container-inner">
                                        <input type="text" id="inputField" />
                                    </div>
                                </div>
                                <div className="col-md contact-coloring text-center input-container my-4">
                                    <label for="inputField">Subject</label>
                                    <div class="input-container-inner">
                                        <input type="text" id="inputField" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row message-box">
                            <div className="col-md contact-coloring text-center input-container my-4 ">
                                <label for="inputField">Leave us a message...</label>
                                <div class="input-container-inner">
                                    <input type="text" id="inputField" />
                                </div>
                            </div>
                        </div>
                        <div className='breaker-line'>
                        </div>
                        <div className="button-container my-4">
                            <button type="submit" className='btn btn-submit py-3'>
                                Submit
                            </button>
                        </div>

                </div>
            </div>
        </section>
    </>
  )
}

export default Contact