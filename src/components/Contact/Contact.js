import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    return (
        <div>
            <div className="container">
                <div className="row pt-5">
                    <h3 className="text-center pb-3">GET TOUCHE</h3>
                    <div className="col-md-4">
                        <div>
                            <div className="p-3 infoBox">
                                <p>
                                    <FontAwesomeIcon icon={faCoffee} />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </div>
    );
};

export default Contact;