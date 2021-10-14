import React from 'react'
import { image } from '../../asset/img';

import './style/home_sec5.css'

const Home__sec5 = () => {
    return (
        <div className="home__sec5">
            <div className="home__Sec5--content1">
                <img src={image.mockup5} alt="" />
            </div>
            <div className="home__Sec5--content2">
                <div className="content--sec1">
                    <div> 
                    </div>
                    <p>
                        EXPERTOS EN EL CAMPO
                    </p>
                </div>
                <h3>
                Equipo con el que quieres trabajar
                </h3>
                <p>
                    Somos un equipo joven con un amplio conocimiento en el campo, contamos con excelentes profesionales capacitados altamente en la creación de marca, manejo de redes sociales, creación de sitios web, estrategia de comunicación digital y exterior. Nuestro pilar es integrar áreas de trabajo como: el diseño gráfico, la producción audiovisual, la comunicación y la ingeniería de sistemas. Para impulsar a nuestros clientes a el éxito. 
                </p>
            </div>
        </div>
    )
}

export default Home__sec5;
