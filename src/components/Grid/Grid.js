import React, { useState } from "react";
import Room from "../Room/Room";
import "./Grid.css";
import rooms from "../../gamedata/rooms";
import TalkModal from "../TalkModal/TalkModal";

function Grid() {
    // State to determine if the Talk Modal shows or not
    const [modal, toggleModal] = useState(true);

    // State to determine the current Modal characters. Probably something that will be outsourced into a gameState Hook eventually
    const [modalCharacters, setModalCharacters] = useState([]);

    return (
        <div className="Grid">
            {modal && (
                <TalkModal
                    modalCharacters={modalCharacters}
                    toggleModal={toggleModal}
                />
            )}
            <div className="row row--1">
                {rooms.map((room) => (
                    <Room
                        key={room.id}
                        room={room}
                        setModalCharacters={setModalCharacters}
                        toggleModal={toggleModal}
                    />
                ))}
            </div>
        </div>
    );
}

export default Grid;
