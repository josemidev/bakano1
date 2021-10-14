import React from 'react'
import Banner_form from '../components/Banner_form';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Home__sec1 from './sections/Home__sec1';
import Home__sec2  from './sections/Home__sec2';
import Home__sec5 from './sections/Home__sec5';

function Home() {
    return (
        <div>
            <Hero/>
            <section className="container">
                <Home__sec1/>
            </section>
            <section className="container">
                <Home__sec5/>
            </section>
            
                <Banner_form/>
            
            <Footer/>
        </div>
    )
}

export default Home; 
