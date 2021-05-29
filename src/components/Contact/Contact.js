import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faEnvelope, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
{/* <i class="fas faMapMarkedAlt"></i> */ }

const Contact = () => {
    return (
        <div>
            <div className="container">
                <h1 className="text-center pb-3 pt-3 mission">GET <span className="color">IN</span> TOUCHE</h1>
                <div className="row pt-5 pb-3">

                    <div className="col-md-4 mb-3">
                        <div className="text-center">
                            <div className="p-5 infoBox">
                                <div className="pt-3 pb-3">
                                    <p className="text-center p-3">
                                        <FontAwesomeIcon icon={faPhoneAlt} className='icon mission' />
                                    </p>
                                    <h2 className='text-center color'>PHONE</h2>
                                    <p className='text-center fontSize'>
                                        +00546879
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="text-center">
                            <div className="p-5 infoBoxEmail">
                                <div className="pt-3 pb-3">
                                    <p className="text-center p-3">
                                        <FontAwesomeIcon icon={faEnvelope} className='icon color' />
                                    </p>
                                    <h2 className='text-center mission'>Email</h2>
                                    <p className='text-center fontSize'>
                                        bookCorner@gamil.com
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="text-center">
                            <div className="p-5 infoBox">
                                <div className="pt-3 pb-3">
                                    <p className="text-center p-3">
                                        <FontAwesomeIcon icon={faMapMarkedAlt} className='icon mission' />
                                    </p>
                                    <h2 className='text-center color'>ADDRESS</h2>
                                    <p className='text-center fontSize'>
                                        123, CHICAGO, IL 60606
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pb-5 pt-3">
                    <h1 className="text-center color ">SEND <span className="mission">YOUR</span> OPINION</h1>
                    <p className="text-center fontSize pb-3">
                        Have a question or want to any help together?
                    </p>
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <div className="p-5 border emailBox border-info">
                            <form className="contact-form text-white">
                                <label>Name</label>
                                <input type="text" name="to_name" class="form-control" placeholder="Enter Your Name" />
                                <br />
                                <label>Email</label>
                                <input type="email" name="from_name" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Valid Email" />
                                <br />
                                <label>Message</label>
                                <textarea name="message" class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter Your Message" />
                                <br />
                                <button type="submit" class="btn btn-info float-right">Send Your Massage</button>
                                {/* <input type="" value="Send" /> */}
                            </form>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        </div>
    );
};

export default Contact;