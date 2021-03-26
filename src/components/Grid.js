import React, { useState } from 'react'
import Room from './Room'
import './Grid.css'

function Grid() {

    const [characters, setCharacter] = useState([
        {
            name: 'Henrietta',
            color: 'blue',
            room: 1
        },
        {
            name: 'Joseph',
            color: 'red',
            room: 2,
        },
        {
            name: 'Debbie',
            color: 'green',
            room: 3
        },
        {
            name: 'Daniel',
            color: 'yellow',
            room: 4
        }
    ])

    const rooms = [
        {
            id: 1,
            name: 'kitchen'
        },
        {
            id: 2,
            name: 'bathroom'
        },
        {
            id: 3,
            name: 'sleeping room'
        },
        {
            id: 4,
            name: 'living room'
        }
    ]

    const changeRoom = (name, newRoom) => {
        const updatedCharacters = characters.map(character => {
            if (character.name === name) {
                character = {...character, room: newRoom}
                console.log(character)
            }
            return character
        })
        
        setCharacter(updatedCharacters)
    }



    return (
        <div className="Grid">
            <div className="row row--1">
                {rooms.map((room => <Room 
                key={room.id} 
                id={room.id} 
                name={room.name} 
                changeRoom={changeRoom} 
                characters={characters}
                />))}
            </div>

        </div>
    )
}

export default Grid