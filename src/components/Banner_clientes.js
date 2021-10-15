import React from 'react'
import { image } from '../asset/img';

import './style/banner_clientes.css'

function Banner_clientes() {
    return (
        <div className="banner__clientes">
            <div className="container">
                <h2>
                    Nuestros Clientes
                </h2>
                <div className="banner__clientes--content">
                    <img src={image.cl__logo} alt="logo alpha" />
                    <img src={image.cl__logo1} alt="logo carittew" />
                    <img src={image.cl__logo2} alt="logo street baq" />
                    <img src={image.cl__logo3} alt="logo peru caribe" />
                    <img src={image.cl__logo4} alt="logo sancochos" />
                    <img src={image.cl__logo5} alt="log o mares" />
                </div>
            </div>
        </div>
    )
}

export default Banner_clientes;
