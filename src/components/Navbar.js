import React from 'react'

import Btn from './Btn';

import {image} from '../asset/img'

import './style/navbar.css'

function Navbar() {
    return (
        <nav>
            <div className="container">
                <div className="nav__logo">
                    <img src={image.logo_white} alt="" />
                </div>
                <div className="nav__items">
                    <ul>
                        <li className="item">Nosotros</li>
                        <li className="item">Servicios</li>
                        <li className="item">Portafolio</li>
                        <li className="item">Blog</li>
                        <Btn type="regular" content="Contacto" />
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
