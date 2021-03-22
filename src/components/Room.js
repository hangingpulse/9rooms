import React from 'react'
import Character from './Character'
import './Room.css'


function Room({number}) {

    const dragEnter = e => {
        e.preventDefault();
        e.stopPropagation();
    }

    const dragLeave = e => {
        e.preventDefault();
        e.stopPropagation();
    }

    const dragOver = e => {
        e.preventDefault();
        e.stopPropagation();
    }

    const drop = e => {
        e.preventDefault();
        e.stopPropagation();
    }



    return (
        <div className="room"
            onDragEnter={dragEnter}
            onDragLeave={dragLeave}
            onDragOver={dragOver}
            onDrop={drop}
        >
            <h1 className="room__title">ROOM {number}</h1>
            <div className="room__area">
                <Character/>
            </div>
        </div>
    )
}

export default Room
