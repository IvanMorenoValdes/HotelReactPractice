import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../Context'
import Title from "../components/Title"

const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}
export default function RoomsFilter({rooms}){

    const context = useContext(RoomContext);

    const {handleChange,type,capacity,price, minPrice, maxPrice,
    minSize,  maxSize, breakfast, pets} = context;
    
    //get unique types
    let types = getUnique(rooms, 'type');

    //add all
    types = ['all', ...types];

    //type to jsx
    types = types.map((item,index) => {
        return <option value={item} key={index}>{item}</option>
    });

    let people = getUnique(rooms,'capacity');
    people = people.map((item,index) => {
        return <option key={index} value={item}>{item}</option>
    })

    function handChange(){

    }
    return (
        <section className="filter-container">
            <Title title="Buscar habitaciones" />
                <form className="filter-form">
                    <div className="form-group">
                        <label htmlFor="type">tipo: </label>
                        <select onChange={handleChange} name="type" id="type" value={type} className="form-control" >
                            {types}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="type">tipo: </label>
                        <select onChange={handleChange} name="capacity" id="capacity" value={capacity} className="form-control" >
                            {people}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">
                            room price ${price}
                        </label>
                        <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="size">
                            room size
                        </label>
                        <div className="size-inputs">
                            <input type="number" name="minSize" id="minSize" value={minSize} onChange={handleChange} className="size-input"/>
                            <input type="number" name="maxSize" id="maxSize" value={maxSize} onChange={handleChange} className="size-input"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="single-extra">
                            <input type="checkbox" checked={breakfast} onChange={handleChange} name="breakfast" id="breakfast" />
                            <label htmlFor="breakfast">breakfast</label>
                        </div>
                        <div className="single-extra">
                            <input type="checkbox" checked={pets} onChange={handleChange} name="pets" id="pets" />
                            <label htmlFor="pets">pets</label>
                        </div>
                    </div>
                </form>
            
        </section>
        
    )
}