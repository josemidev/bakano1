import React from 'react'
import { image } from '../../asset/img';

import './style/nosotros_sec3.css'

const Nosotros__sec3 = () => {
    return (
        <div className="nosotros__sec3">
            <div className="container">
                <div className="nosotros__sec3--content">
                    <div className="sec3--card">
                        <img src={image.cl__avatar1} alt="" />
                        <div className="sec3--card-body">
                            <h4>
                                Jorge Estrada
                            </h4>
                            <p>
                                Director Creativo-CEO
                            </p>
                        </div>
                    </div>

                    <div className="sec3--card">
                        <img src={image.cl__avatar2} alt="" />
                        <div className="sec3--card-body">
                            <h4>
                                Rafael Rios
                            </h4>
                            <p>
                                Director de Audiovisuales
                            </p>
                        </div>
                    </div>

                    <div className="sec3--card">
                        <img src={image.cl__avatar3} alt="" />
                        <div className="sec3--card-body">
                            <h4>
                                Carolina Anaya
                            </h4>
                            <p>
                                Directora Comercial
                            </p>
                        </div>
                    </div>

                    <div className="sec3--card">
                        <img src={image.cl__avatar1} alt="" />
                        <div className="sec3--card-body">
                            <h4>
                                Jorge Estrada
                            </h4>
                            <p>
                                Director Creativo-CEO
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nosotros__sec3;
