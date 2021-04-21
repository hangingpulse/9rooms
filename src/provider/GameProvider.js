import { createContext, useReducer } from "react";

const initialState = {
    rooms: [
        {
            id: "kitchen",
            slots: [
                {
                    id: "kitchen-1",
                    character: "Joseph",
                },
                {
                    id: "kitchen-2",
                    character: "",
                },
            ],
        },
        {
            id: "bathroom",
            slots: [
                {
                    id: "bathroom-1",
                    character: "Debbie",
                },
                {
                    id: "bathroom-2",
                    character: "",
                },
            ],
        },
        {
            id: "sleeping-room",
            slots: [
                {
                    id: "sleeping-room-1",
                    character: "Daniel",
                },
                {
                    id: "sleeping-room-2",
                    character: "",
                },
            ],
        },
        {
            id: "living-room",
            slots: [
                {
                    id: "living-room-1",
                    character: "Henrietta",
                },
                {
                    id: "living-room-2",
                    character: "",
                },
            ],
        },
    ],
};

const gameStore = createContext(initialState);
const { Provider } = gameStore;

function GameProvider({ children }) {
    const reducer = (state, action) => {
        switch (action.type) {
            case "new game":
                return initialState;
            case "change room":
                return { ...state, rooms: [...action.payload] };
            default:
                return state;
        }
    };

    const [gameState, dispatch] = useReducer(reducer, initialState);

    // ************** Change Room Function ***************

    const changeRoom = (newSlot, droppedCharacter) => {
        // Put all current slots together in one array for simpler manipulation
        const slots1 = gameState.rooms.map((room) => room.slots[0]);
        const slots2 = gameState.rooms.map((room) => room.slots[1]);
        const slots = [...slots1, ...slots2];

        const updatedSlots = slots.map((slot) => {
            // Check which is the right slot and if it is currently empty. Drop the character here.
            if (slot.id === newSlot && !slot.character.length) {
                return {
                    ...slot,
                    character: droppedCharacter,
                };
                // Delete the character from his former slot
            } else if (
                slot.character === droppedCharacter &&
                slot.character !== droppedCharacter
            ) {
                return {
                    ...slot,
                    character: "",
                };
                // otherwise just return the slot as it was
            } else {
                return slot;
            }
        });

        const updatedRooms = gameState.rooms.map((room) => {
            const filteredSlots = updatedSlots.filter(
                (slot) =>
                    room.slots[0].id === slot.id || room.slots[1].id === slot.id
            );
            return {
                ...room,
                slots: filteredSlots,
            };
        });
        dispatch({ type: "change room", payload: updatedRooms });
    };

    return <Provider value={{ gameState, changeRoom }}>{children}</Provider>;
}

export { gameStore, GameProvider };
