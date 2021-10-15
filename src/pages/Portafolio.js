import React from 'react'
import Banner_form from '../components/Banner_form'
import Footer from '../components/Footer'
import Galery from '../components/Galery'
import Hero2 from '../components/Hero2'
import Portafolio__sec1 from './sections/Portafolio__sec1'


function Portafolio() {
    return (
        <div className="portafolio">
            <Hero2 type="portafolio" />
            <section className="container">
                <Portafolio__sec1/>
            </section>
            <section className="container">
                <Galery/>
            </section>
            <Banner_form/>
            <Footer/>
        </div>
    )
}

export default Portafolio
