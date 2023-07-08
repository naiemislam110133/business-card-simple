import React from 'react';
import "./Header.css";
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <nav>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="menu">
                <a href="/shop">Shop</a>
                <a href="/order">Order</a>
                <a href="/inventory">Inventory</a>
                <a href="/contract us">Contract Us </a>
            </div>
        </nav>
    );
};

export default Header;