import React from 'react'
import Btn from './Btn';

import './style/card.css'

function Card(props) {
    return (
        <div className="card">
            <div className="card__header">
                    <img src={props.img} alt="" />
                <div className="card__header--subtitle">
                    <div></div>
                    <p>
                        {props.subtitle}
                    </p>
                </div>
                <h3 className="card__header--title">
                    {props.title}
                </h3>
            </div>
            <div className="card__body">
                <p>
                    {props.text}
                </p>
            </div>
            <div className="card__footer">
                <Btn type="card" content="ver mas -->" />
            </div>
        </div>
    )
}

export default Card;
