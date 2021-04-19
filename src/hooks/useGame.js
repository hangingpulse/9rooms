import { useReducer } from 'react'

function useGame() {
    
    const initialState = {
        rooms: [
            {
                slot1: 4,
                slot2: null,
            },
            {
                slot1: 1,
                slot2: null,
            },
            {
                slot1: 2,
                slot2: null,
            },
            {
                slot1: 3,
                slot2: null,
            }
        ]
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'new game':
                return initialState
            case 'change room':
                return {...state, rooms: [...action.payload]}
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    // ************** Change Room Function ***************

    const changeRoom = (newRoom, droppedCharacter) => {
        const updatedRooms = state.rooms.map((room, index) => {
            if (newRoom === index) { //check the different Slots. If there is no character in slot 1, the new character is always added there
                if (!room.slot1) {
                    const newRoom = {
                        ...room,
                        slot1: droppedCharacter
                    }
                    return newRoom
                }
                if (!room.slot2) {
                    const newRoom = {
                        ...room,
                        slot2: droppedCharacter
                    }
                    return newRoom
                }
                return room
            } else {
                console.log(room, droppedCharacter)
                if (room.slot1 === droppedCharacter) {
                    const oldRoom = {
                        ...room,
                        slot1: null,
                    }
                    return oldRoom    
                }
                if (room.slot2 === droppedCharacter) {
                    const oldRoom = {
                        ...room,
                        slot2: null
                    }
                    return oldRoom
                }
                return room    
            }
        })
        dispatch({type: 'change room', payload: updatedRooms})
    }


    
    return [state, changeRoom]
}

export default useGame
