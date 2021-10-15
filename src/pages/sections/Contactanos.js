import React from 'react'
import { image } from '../../asset/img';

import './style/contactanos.css'

function Contactanos() {
    return (
        <div className="contactanos">
            <h3>
                Contáctanos
            </h3>
            <p>
                llámanos al <cite className="cite">304 371 8503</cite> o a <cite className="cite">300 565 2589</cite>, <br /> también puedes enviarnos un correo a <cite className="cite">hello@bakano.com</cite> <br /> con gusto te responderemos
            </p>

            <div className="redes">
                <img src={image.instagram} alt="" />
                <img src={image.facebook} alt="" />
                <img src={image.linkeding} alt="" />
            </div>
        </div>
    )
}

export default Contactanos;
