import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import {RoomContext} from '../Context'

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
        return (
            <div>
                hello single room
            </div>
        )
    }
}
