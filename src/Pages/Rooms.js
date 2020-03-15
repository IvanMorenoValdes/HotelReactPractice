import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'

export const Rooms = () => {
    return (
        <Hero hero="roomsHero">
            <Banner title='Nuestras habitaciones'>
                <Link to="/" className="btn-primary">
                    Volver a home
                
                </Link>
                
            </Banner>
        </Hero>
    )
}
