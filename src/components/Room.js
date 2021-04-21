import React from "react";
import "./Room.css";
import RoomSlot from "./RoomSlot";

function Room({ room }) {
    return (
        <div className="room">
            <h1 className="room__title">{room.name}</h1>
            <div className="room__area">
                <RoomSlot currentSlot={room.slots[0]} />
                <RoomSlot currentSlot={room.slots[1]} />
            </div>
        </div>
    );
}

export default Room;
