import React from "react";
import { useDrag } from "react-dnd";
import "./Character.css";
import { ItemTypes } from "../utils/ItemTypes";
import characters from "../gamedata/characters";

function Character({ characterName }) {
    const currentCharacter = characters.find(
        (character) => character.name === characterName
    );

    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.CHARACTER,
        item: {
            character: characterName,
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    const characterStyle = {
        backgroundColor: currentCharacter.color,
    };

    return (
        <div
            className={isDragging ? "character character--drag" : "character"}
            ref={drag}
            style={characterStyle}
        >
            <h2 className="character__name">{currentCharacter.name}</h2>
        </div>
    );
}

export default Character;
