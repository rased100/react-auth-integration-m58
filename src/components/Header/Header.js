import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <Link to="/home">Home</Link>
            <Link to="/shipping">Shipping</Link>
            <Link to="/placeorder">Place Order</Link>
            <Link to="/registration">Registration</Link>
            <Link to="/login">Login</Link>
        </div>
    );
};

export default Header;