import React, { useState, useEffect } from 'react'
import Room from './Room'
import './Grid.css'

function Grid() {

    const [roomsUpdated, setRoomsUpdated] = useState(false)

    const characters = [
        {
            name: 'Henrietta',
            color: 'blue',
        },
        {
            name: 'Joseph',
            color: 'red',
        },
        {
            name: 'Debbie',
            color: 'green',
        },
        {
            name: 'Daniel',
            color: 'yellow',
        }
    ]

    const [rooms, setRooms] = useState([
        {
            id: 1,
            name: 'kitchen',
            characters: ['Henrietta']
        },
        {
            id: 2,
            name: 'bathroom',
            characters: ['Joseph']
        },
        {
            id: 3,
            name: 'sleeping room',
            characters: ['Debbie']
        },
        {
            id: 4,
            name: 'living room',
            characters: ['Daniel']
        }
    ])

    useEffect(() => {
        setRoomsUpdated(true)
    }, [rooms])

    const changeRoom = (characterName, newRoom) => {
        console.log(roomsUpdated)
        console.log(characterName)
        setRooms(prevRooms => {
            const updatedRooms = prevRooms.map(room => {
                if (newRoom.id === room.id) {
                    const newRoom = {
                        ...room,
                        characters: [...room.characters, characterName]
                    }
                    return newRoom
                }
                if (room.characters.includes(characterName) && newRoom.id !== room.id) {
                    
                    const oldRoom = {
                        ...room,
                        characters: room.characters.filter(character => character !== characterName) 
                    }
                    return oldRoom
                }
                return room
            })
            return updatedRooms;
          });
    }

    
    return (
        <div className="Grid">
            <div className="row row--1">
                {rooms.map((room => roomsUpdated && <Room 
                key={room.id} 
                room={room} 
                changeRoom={changeRoom} 
                characters={characters.filter(character => room.characters.includes(character.name) )}
                /> ))}
            </div>
        </div>
    )
    
}

export default Grid