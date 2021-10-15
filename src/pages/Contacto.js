import React from 'react'

import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Contactanos from './sections/Contactanos';

function Contacto() {
    return (
        <div className="contacto">
            <Hero/>
            <section className="container">
                <Contactanos/>
            </section>
            <Footer/>
        </div>
    )
}

export default Contacto;
