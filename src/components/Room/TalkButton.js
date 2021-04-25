import React, { useContext } from "react";
import { BsFillChatFill } from "react-icons/bs";
import { gameStore } from "../../provider/GameProvider";

function TalkButton({ setModalCharacters, toggleModal, selectedRoom }) {
    const { gameState } = useContext(gameStore);

    const currentRoom = gameState.rooms.find(
        (room) => room.id === selectedRoom.id
    );

    const charactersInRoom = currentRoom.slots.map((slot) => slot.character);

    const handleTalk = () => {
        toggleModal((prevState) => !prevState);
        setModalCharacters(charactersInRoom);
    };

    return (
        <div className="TalkButton" onClick={handleTalk}>
            <BsFillChatFill className="TalkButton__icon" size={25} />
        </div>
    );
}

export default TalkButton;
