import React from 'react'

import { image } from '../../asset/img'

import './style/home_sec1.css'

const Home__sec1 = () => {
    return (
        <div className="home__sec1">
            <div className="home__Sec1--content1">
                <img src={image.mockup1} alt="" />
            </div>
            <div className="home__Sec1--content2">
                <div className="content--sec1">
                    <div> 
                    </div>
                    <p>
                        EXPERTOS EN EL CAMPO
                    </p>
                </div>
                <h3>
                    SOLUCIONES ÚNICAS <br/>
                    PARA SU NEGOCIO
                </h3>
                <p>
                    Si aún no tienes claro el norte en cuanto al enfoque de tu marca o producto estrella, nuestro equipo te guiará por el camino correcto. El posicionamiento y adecuado uso de tu marca en el internet es indispensable para mantener la conexión inmediata con el cliente.
                </p>
            </div>
        </div>
    )
}

export default Home__sec1;
