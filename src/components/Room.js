import React from "react";
import "./Room.css";
import RoomSlot from "./RoomSlot";
import { IoChatbubbleOutline } from "react-icons/io5";

function Room({ room }) {
    const background = {
        backgroundImage: `url(${room.image})`,
    };

    return (
        <div className="room" style={background}>
            {/* <h1 className="room__title">{room.name}</h1> */}
            <div className="room__area">
                <RoomSlot currentSlot={room.slots[0]} />
                <div className="Room__btn--talk">
                    <IoChatbubbleOutline size={"3rem"} />
                </div>
                <RoomSlot currentSlot={room.slots[1]} />
            </div>
        </div>
    );
}

export default Room;
