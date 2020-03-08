import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "Cocktails gratis",
                info: "Proident elit est velit sunt proident sit aute cillum."
            },
            {
                icon: <FaHiking />,
                title: "Senderismo a tope",
                info: "Proident elit est velit sunt proident sit aute cillum."
            },
            {
                icon: <FaShuttleVan />,
                title: "Lanzadera gratis",
                info: "Proident elit est velit sunt proident sit aute cillum."
            },
            {
                icon: <FaBeer />,
                title: "Cerveza a cascoporro",
                info: "Proident elit est velit sunt proident sit aute cillum."
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="Servicios"></Title>
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    })}
                </div>
            </section>
        )
    }
}
