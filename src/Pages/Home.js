import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'

export const Home = () => {
    return (
        <Hero>
           <Banner title="Habitaciones lujosas" subtitle="Habitaciones premium desde 299€">
               <Link to="/rooms" className="btn-primary">
                   Nuestras habitaciones
               </Link>

           </Banner>
           
        </Hero>
    )
}
