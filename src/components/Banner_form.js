import React from 'react'
import Btn from './Btn';

import './style/banner_forms.css'

function Banner_form() {
    return (
        <div className="banner__form">
            <div className="container">
                <div className="banner__form--body">
                    <h2>
                    Tienes un proyecto? <cite className="banner__title--cite"> hablemos</cite> 
                    </h2>
                    <p>
                        Bakano fue pensado y creado para ser el apoyo digital de empresas pequeñas, medianas y grandes. ¡No dudes en consultarnos cualquier inquietud!
                    </p>
                </div>
                <div className="banner__form--footer">
                    <div className="footer--form">
                    <input type="text" placeholder="Nombre"  />
                    <input type="text" placeholder="Celular" />
                    </div>

                    <Btn type="banner" content="SEND" />
                </div>
            </div>
        </div>
    )
}

export default Banner_form;
