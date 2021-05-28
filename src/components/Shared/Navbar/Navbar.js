import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
                    <Link to="/" class="navbar-brand">Book Corner</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ms-auto">
                            <Link to="/home" class="nav-link active" aria-current="page">HOME</Link>
                            <Link to="/about" class="nav-link">ABOUT</Link>
                            <Link to="/books" class="nav-link">BOOKS</Link>
                            <Link to="/contact" class="nav-link">CONTACT US</Link>
                            <Link to="/login" class="nav-link">LOGIN</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;