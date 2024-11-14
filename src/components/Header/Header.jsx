import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <img src="/images/logo.svg" alt="" />
            <nav>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
                <a href="#">Blog</a>
                <a href="#">Careers</a>
            </nav>
            <button>Request Invite</button>
        </header>
    );
};

export default Header;
