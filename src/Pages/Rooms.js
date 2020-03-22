import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import RoomContainer from '../components/RoomContainer'
import {RoomConsumer} from '../Context'
import {LoadingComponent} from '../Context'
export const Rooms = () => {
    return (
        <>
        <Hero hero="roomsHero">
            <Banner title='Nuestras habitaciones'>
                <Link to="/" className="btn-primary">
                    Volver a home
                
                </Link>
                
            </Banner>
        </Hero>
        <RoomContainer></RoomContainer>
        </>
    )
}
