import React from 'react';
import { Link } from 'react-router-dom';
import './HomeContact.css'

const HomeContact = () => {
    return (
        <div className="container py-5 text-center w-50">
            <div className="row">
                <h2>Get In Touch</h2>
                <h6 className="py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facere illum tempora neque, unde voluptatibus molestias sapiente vero cupiditate porro!</h6>
                <div>
                    <Link to="/contact" className="btn btn-info">SEND MESSAGE</Link>
                </div>
            </div>
        </div>
    );
};

export default HomeContact;