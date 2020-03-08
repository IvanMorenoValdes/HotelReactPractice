import React from 'react'
import {Link} from 'react-router-dom'
import Hero from '../components/Hero'
import Banner from '../components/Banner'

export default function Error() {
    return (
        <Hero>
            <Banner title='not 404 bc no http request was made lul' subtitle='Página no encontrada'>
                <Link to="/" className='btn-primary'>
                    Volver a home
                </Link>
            </Banner>
        </Hero>
    )
}
