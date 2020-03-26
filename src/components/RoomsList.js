import Room from './Room'
import React from 'react'

export default function RoomsList({rooms}){
    if (rooms.length === 0){
        return (<div className="empty-search">
            <h3> No hay habitaciones con esos parametros</h3>
        </div>);
    }
        
        
    
    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {rooms.map(item => {
                    return <Room key={item.id} room={item} />;
                })};

            </div>
        </section>
    )
}