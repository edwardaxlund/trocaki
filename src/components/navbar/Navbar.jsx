import React,{useState} from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import './navbar.css';
import  logo from '../../assets/Png/Logotype-black.png'

const Menu = () =>{
    <>
    <p><a href="#home" >Home</a></p>
    <p><a href="#trocaki" >What is Trocaki</a></p>
    <p><a href="#features" >Get involved</a></p>
    <p><a href="#blog" >Links</a></p>
    </>
} 

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className = "trocaki__navbar">
            <div className = 'trocaki__navbar-links'>
                <div className = 'trocaki__navbar-links_logo'>
                    <img src = {logo} alt = "logo" />                    
                </div>
                <div className = "trocaki__navbar-links_container">
                    <p><a href="#home" >Home</a></p>
                    <p><a href="#trocaki" >What is Trocaki</a></p>
                    <p><a href="#features" >Get involved</a></p>
                    <p><a href="#blog" >Links</a></p>
                </div>
            </div>
            <div className = "trocaki__navbar-sign">
            <button type ="button">Sign up</button>
            </div>
            <div className = "trocaki__navbar-menu">
                {toggleMenu
                ? <RiCloseLine color="#ffff" size = {27} onClick= {() => setToggleMenu(false)}/>
                : <RiMenu3Line color="#ffff" size = {27} onClick= {() => setToggleMenu(true)}/>
                }
                {toggleMenu && (
                <div className = "trocaki__navbar-menu_container scale-up-center">
                    <div className = "trocaki__navbar-menu_container-links">
                        <Menu/>
                    </div>
                </div>
                )}
            </div>
        </div>
    )
}

export default Navbar