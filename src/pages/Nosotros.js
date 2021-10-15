import React from 'react'
import Banner_clientes from '../components/Banner_clientes';
import Footer from '../components/Footer';
import Hero2 from '../components/Hero2';
import Nosotros_sec2 from './sections/Nosotros_sec2';
import Nosotros__sec1 from './sections/Nosotros__sec1';
import Nosotros__sec3 from './sections/Nosotros__sec3';

function Nosotros() {
    return (
        <div>
            <Hero2 type="nosotros" />
            <section className="container">
                <Nosotros__sec1/>
            </section>
            <section className="container">
                <Nosotros_sec2/>
            </section>
            <section>
                <Nosotros__sec3/>
            </section>
            <Banner_clientes/>
            <Footer/>
        </div>
    )
}

export default Nosotros;
