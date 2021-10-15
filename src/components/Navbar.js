import React from 'react'

import Btn from './Btn';

import {image} from '../asset/img'

import './style/navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <div className="container">
                <div className="nav__logo">
                    <img src={image.logo_white} alt="" />
                </div>
                <div className="nav__items">
                    <ul>
                        <li className="item">
                            <Link to="/pages/nosotros" className="link">
                                Nosotros
                            </Link>
                        </li>
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
