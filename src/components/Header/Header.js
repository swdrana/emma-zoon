import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <div>
            <header>
                <a href="/"><img src={logo} alt="logo" /></a>
                <nav>
                    <ul>
                        <li><a href="/Order">Order</a></li>
                        <li><a href="/Review">Review</a></li>
                        <li><a href="/Inventory">Inventory</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;