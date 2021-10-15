import React from 'react'
import { image } from '../asset/img';
import Navbar from './Navbar';

import './style/hero2.css'

function Hero2(props) {
    const type = `hero2 hero--${props.type}`

    return (
        <div className={type}>
            <Navbar/>

            
        </div>
    )
}

export default Hero2;
