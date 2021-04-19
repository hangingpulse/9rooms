import React from 'react'
import { useDrag } from 'react-dnd'
import './Character.css'
import {ItemTypes} from '../utils/ItemTypes'
import characters from '../gamedata/characters'

function Character({characterId}) {

    const [{ isDragging}, drag] = useDrag(() => ({
        type: ItemTypes.CHARACTER,
        item: {
            character: characterId,
        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    const currentCharacter = characters.find(character => character.index === characterId)

    return (
        <div 
        className={isDragging? 'character character--drag':'character'}
        ref={drag}
        >
            <h2 className="character__name">{currentCharacter.name}</h2>
        </div>
    )
}

export default Character
