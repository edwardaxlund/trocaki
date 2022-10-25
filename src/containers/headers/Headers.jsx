import React from 'react';
import './headers.css';
import bird from "../../assets/Png/Logomark-Black.png"

const Headers = () => {
    return (
        <div className = "trocaki__header section_padding" id = "home">
            <div className = "trocaki__header-content">
                <h1 className = "gradient__text">
                    Join Trocaki, bringing crypto to Brazil
                </h1>
                <p>Join us and enjoy easy crypto exchange</p>
                <div className = "trocaki__header-content__input">
                    <input type = "email" placeholder = "Email"></input>
                    <button type ="button" >Get started</button>
                </div>

                <div className = "trocaki__header-image">
                    <img src = {bird}/>
                </div>
            </div>
        </div>
    )
}

export default Headers