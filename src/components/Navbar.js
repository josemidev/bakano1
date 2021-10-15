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
                    <Link to="/" className="link">
                        <img src={image.logo_white} alt="" />
                    </Link>
                </div>
                <div className="nav__items">
                    <ul>
                        <li className="item">
                            <Link to="/pages/nosotros" className="link">
                                Nosotros
                            </Link>
                        </li>
                        <li className="item">
                        <Link to="/pages/servicios" className="link">
                                Servicios
                            </Link>
                        </li>
                        <li className="item">
                            <Link to="/pages/portafolio" className="link">
                                Portafolio
                            </Link>
                        </li>
                        <li className="item">Blog</li>
                        <Link to="/pages/contacto" className="link">
                        <Btn type="regular" content="Contacto" />
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
