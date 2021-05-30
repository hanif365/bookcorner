import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div className="bg-info py-3  d-flex align-items-center justify-content-center">
            <h6>@2021 <span className="text-colorful">Book Corner</span> All Rights Reserved</h6>
            <div>
                <a href="#" className="bottom-to-top"><FontAwesomeIcon icon={faArrowUp} size="2x" /></a>
            </div>
        </div>
    );
};

export default Footer;