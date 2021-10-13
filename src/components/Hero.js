import React from 'react'

import Btn from './Btn';
import Navbar from './Navbar';

import './style/hero.css'
function Hero(props) {

    const type = `hero hero__${props.type}`;


    return (
        <header className={type}>
            <Navbar/>
            
        </header>
    )
}

export default Hero;
