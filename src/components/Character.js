import React from 'react'
import { useDrag } from 'react-dnd'
import './Character.css'
import {ItemTypes} from '../utils/ItemTypes'


function Character({character}) {

    const [{ isDragging}, drag] = useDrag(() => ({
        type: ItemTypes.CHARACTER,
        item: {
            name: character.name,
            room: character.room    
        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    })

    )

    return (
        <div 
        className={isDragging? 'character character--drag':'character'}
        ref={drag}
        >
            <h2 className="character__name">{character.name}</h2>
        </div>
    )
}

export default Character
