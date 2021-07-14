import React from 'react';
import "./Header.css";
import Logo from './logo';
import Title from './title';
import Nav from './nav';

const Header = (props) => {
    return (
        <header className="header-container">
            <div className="upper-container">
                <div className="logo">
                    <Logo />
                </div>
                <div className="title">
                    <Title />
                </div>
            </div>
            <div className="lower-container">
                <div className="nav-bar">
                    <Nav />
                </div>
            </div>
        </header>
    )
};

export default Header;