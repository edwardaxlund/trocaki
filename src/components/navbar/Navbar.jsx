import React from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import './navbar.css';
import  logo from '../../assets/logo.png'
const Navbar = () => {
    return (
        <div className = "trocaki_navbar">
            <div className = 'trocaki_navbar-links'>
                <div className = 'trocaki_navbar-links_logo'>
                    <img src = {logo} alt = "logo"/>
                </div>
            </div>
        </div>
    )
}

export default Navbar