import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import {RoomContext} from '../Context'
import StyledHero from '../components/StyledHero'
export default class SingleRoom extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        }
    }

    static contextType = RoomContext;

    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);

        if (!room){
            return <div className="error">
                <h3>
                    Esa habitación no se ha podido encontrar.
                </h3>
                <Link to='/rooms' className='btn-primary' >Volver a habitaciones</Link>
            </div>
        }

        const {name,description,capacity,size,price,extras,breakfast,pets,images} = room;

        const [mainImg,...defaultImg] = images;

        return (
            <>
                <StyledHero img={images[0]} >
                    <Banner title={`${name} room`}></Banner>
                    <Link to='/rooms' className='btn-primary'></Link>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                        {images.map((item,index)=>{
                            return <img key={index} src={item} alt={name} />
                        })}
                     </div>
                </section>
                <div className="single-room-info">
                    <article className="desc">
                        <h3>
                            details
                        </h3>
                        <p>
                            {description}
                        </p>
                    </article>
                     <article className="info">
                         <h3>info</h3>
                        <h6>price: ${price}</h6>
                        <h6>size: ${size}</h6>
                        <h6>
                            max capacity:{" "}
                            {capacity > 1 ? `${capacity} persona`: `${capacity} personas`}
                        </h6>
                        <h6>{pets ? "Mascotas permitidas": "No se admiten mascotas"}</h6>
                        <h6>{breakfast ? "Desayuno incluido" : ""}</h6>
                        
                     </article>
                     <section>
                        <h6>extras</h6>
                        <ul className="">
                            {extras.map((item,key)=>{
                                return <li key={key}>{item}</li>
                            })}
                        </ul>
                    </section>

                </div>
            </>
        )
    }
}
