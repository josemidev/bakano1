import React from 'react'
import { image } from '../../asset/img';

import './style/nosotros_sec2.css'

const Nosotros_sec2 = () => {
    return (
        <div className="nosotros__sec2">
            <div className="nosotros__sec2--content1">
            <img src={image.mockup3} alt="" />
            </div>
            <div className="nosotros__sec2--content2">
                <p className="subtitle">
                    EXPERTOS EN EL CAMPO
                </p>
                <h3>
                    BAKANO DIGITAL
                </h3>
                <div></div>
                <p className="text">
                    tenemos más de   3 años en el mercando con grandes resultados y clientes satisfechos, poniendo en practica siempre todos nuestros conocimientos para dar resultados verdaderos.
                </p>
            </div>
            
        </div>
    )
}

export default Nosotros_sec2;
