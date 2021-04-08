import React from 'react'
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../utils/ItemTypes'
import Character from './Character'
import './Room.css'


function Room({room, characters, changeRoom}) {

    const [{isOver}, drop] = useDrop({
        accept: ItemTypes.CHARACTER,
        drop: (character) => {
            console.log(character)
            changeRoom(character.name, room)},
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        })
    })


    return (
        <div className="room" ref={drop}>
            <h1 className="room__title">{room.name}</h1>
            <div className="room__area"
                style={isOver? {backgroundColor: 'yellow'}: {}}
            >
                {characters
                    .map((character, i) => (<Character 
                    key={i} 
                    character={character} 
                    changeRoom={changeRoom}
                    />))
                }
            </div>
        </div>
    )
}

export default Room
