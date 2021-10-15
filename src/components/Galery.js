import React from 'react'
import { image } from '../asset/img'

import './style/galery.css'

function Galery() {
    return (
        <div className="galery">
            <img src={image.galery1} alt="" />
            <img src={image.galery2} alt="" />
            <img src={image.galery3} alt="" />
            <img src={image.galery4} alt="" />
            <img src={image.galery5} alt="" />
            <img src={image.galery6} alt="" />
            <img src={image.galery7} alt="" />
            <img src={image.galery1} alt="" />
            <img src={image.galery2} alt="" />
        </div>
    )
}

export default Galery
