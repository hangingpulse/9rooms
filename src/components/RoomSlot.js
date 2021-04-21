import React, { useContext } from "react";
import Character from "./Character";
import { useDrop } from "react-dnd";
import { gameStore } from "../provider/GameProvider";
import { ItemTypes } from "../utils/ItemTypes";

function RoomSlot({ currentSlot }) {
    const { gameState, changeRoom } = useContext(gameStore);

    const [{ isOver }, drop] = useDrop({
        accept: ItemTypes.CHARACTER,
        drop: ({ character }) => {
            changeRoom(currentSlot.id, character);
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    });

    const slots1 = gameState.rooms.map((room) => room.slots[0]);
    const slots2 = gameState.rooms.map((room) => room.slots[1]);
    const slots = [...slots1, ...slots2];

    const selectedSlot = slots.find((slot) => slot.id === currentSlot.id);

    return (
        <div
            className="RoomSlot"
            ref={drop}
            style={isOver ? { backgroundColor: "yellow" } : {}}
        >
            {selectedSlot.character && (
                <Character characterName={selectedSlot.character} />
            )}
        </div>
    );
}

export default RoomSlot;
