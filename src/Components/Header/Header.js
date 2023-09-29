// Header.js
import React from 'react';
import './Header.css';
import Logo from '../../assets/logo.jpeg'

function Header() {
    return (
        <header>
            <div className="container">
                <div className="logo"><img src={Logo}/></div>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
