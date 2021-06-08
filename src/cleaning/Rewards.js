import React from 'react'
import FooterAir from '../AirCleaning/FooterAir'
import HeaderAir from '../AirCleaning/HeaderAir'
import HomeAir from '../AirCleaning/HomeAir'
import Hero from '../components/Hero'
import { SliderData } from '../data/SliderData'
import GlobalStyle from '../globalStyles'
import Header from '../Header'
import MenuHeader from '../MenuHeader'
import './Rewards.css'

function Rewards() {
    return (

        <div className="app">
            <Header/>
           <HeaderAir />
           <HomeAir />
           <FooterAir />
        </div>
    )
}

export default Rewards
