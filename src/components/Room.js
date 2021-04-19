import React from 'react'
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../utils/ItemTypes'
import Character from './Character'
import './Room.css'


function Room({room, characters, changeRoom}) {

    const [{isOver}, drop] = useDrop({
        accept: ItemTypes.CHARACTER,
        drop: ({character}) => {
            console.log(character)
            changeRoom(room.id, character)
        },
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
                <div className="room__slot1">
                    {characters.slot1 && <Character characterId={characters.slot1} changeRoom={changeRoom} />}
                </div>
                <div className="room_slot2">
                    {characters.slot2 && <Character characterId={characters.slot2} changeRoom={changeRoom} />}
                </div>
            </div>
        </div>
    )
}

export default Room
