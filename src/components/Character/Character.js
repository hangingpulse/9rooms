import React from "react";
import { useDrag } from "react-dnd";
import "./Character.css";
import { ItemTypes } from "../../utils/ItemTypes";
import characters from "../../gamedata/characters";

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

    return (
        <div
            className={isDragging ? "Character Character--drag" : "Character"}
            ref={drag}
        >
            <img
                className="Character__image"
                src={
                    isDragging
                        ? currentCharacter.imageDrag
                        : currentCharacter.image
                }
                alt={currentCharacter.name}
            />
            <h2 className="Character__name">{currentCharacter.name}</h2>
        </div>
    );
}

export default Character;
