import React from 'react'
import { CardData } from '../../api/CardData';
import Card from '../../components/Card';

import './style/home_sec2.css'

const Home__sec2 = () => {
    return (
        <div className="home__sec2">
            <h2>
                NOS ESPCIALIZAMOS EN <br /> LO DIGITAL
            </h2>
            <div className="home__sec2--content">
                {
                    CardData.map(Cardinfo =>(
                        <Card 
                        key={Cardinfo.id} title={Cardinfo.title} subtitle={Cardinfo.subtitle} text={Cardinfo.text} img={Cardinfo.img} />
                    ))
                }
            </div>
        </div>
    )
}

export default Home__sec2;