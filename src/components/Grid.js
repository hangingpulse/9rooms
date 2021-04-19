import React from 'react'
import Room from './Room'
import './Grid.css'
import useGame from '../hooks/useGame'
import rooms from '../gamedata/rooms'

function Grid() {

    const [gameState, changeRoom] = useGame()
    console.log(gameState)

    return (
        <div className="Grid">
           
            <div className="row row--1">
                {rooms.map(((room) =>  <Room 
                key={room.id} 
                room={room} 
                changeRoom={changeRoom}
                characters={gameState.rooms[room.id]}
                /> ))}
            </div>
            
        </div>
    )
    
}

export default Grid