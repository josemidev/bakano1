import React from 'react'
import { image } from '../asset/img';


import './style/footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className=" item__1">
                        <img src={image.logo_gray} alt="logo bakano digital" />
                        <p>
                        Síguenos en nuestras redes sociales o comunícate con nosotros a través de e-Mail o nuestros números telefónicos, será un placer responder todas tus inquietudes.
                        </p>
                    </div>
                    <div className="footer__item item__2">
                        <p className="item__title">
                            Useful Links
                        </p>
                        <ul>
                            <li>Nosotros</li>
                            <li>Portafolio</li>
                            <li>Servicios</li>
                            <li>Blog</li>
                            <li>Contacto</li>
                        </ul>
                    </div>
                    <div className="footer__item item__3">
                        <p className="item__title">
                            Useful Link
                        </p>

                        <div className="footer__cuadricula">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="footer__item item__4">
                        <p className="item__title">
                            Useful Link
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, ut ius audiam denique tractatos.
                        </p>


                    </div>
                </div>
                <div className="footer__copy">
                    <div className="copy">
                        <p>
                            © Copyright bAKANO creativo 2019
                        </p>
                    </div>
                    <div className="footer__copy--redes">
                        <p>
                            Follow Us
                        </p>
                        <div className="copy--redes">
                            <img src={image.instagram} alt="" />
                            <img src={image.facebook} alt="" />
                            <img src={image.linkeding} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
