import React from 'react'
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Home__sec1 from './sections/Home__sec1';
import Home__sec2  from './sections/Home__sec2';

function Home() {
    return (
        <div>
            <Hero/>
            <section className="container">
                <Home__sec1/>
            </section>
            <section className="container">
                <Home__sec2/>
            </section>
            <Footer/>
        </div>
    )
}

export default Home; 
