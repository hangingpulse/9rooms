import React from "react";
import "./Room.css";
import RoomSlot from "./RoomSlot";
import TalkButton from "./TalkButton";

function Room({ room, toggleModal, setModalCharacters }) {
    const background = {
        backgroundImage: `url(${room.image})`,
    };

    return (
        <div className="Room" style={background}>
            <RoomSlot currentSlot={room.slots[0]} />
            <TalkButton
                toggleModal={toggleModal}
                selectedRoom={room}
                setModalCharacters={setModalCharacters}
            />
            <RoomSlot currentSlot={room.slots[1]} />
        </div>
    );
}

export default Room;
