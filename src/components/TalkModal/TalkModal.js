import React, { useState } from "react";
import { GrFormClose } from "react-icons/gr";
import characters from "../../gamedata/characters";
import Speechbubble from "./Speechbubble";
import testdialogue from "../../gamedata/dialogues";

import "./TalkModal.css";

function TalkModal({ modalCharacters, toggleModal }) {
    const [leftBubble, toggleLeftBubble] = useState(true);

    const currentCharacters = characters.filter((character) =>
        modalCharacters.includes(character.name)
    );
    const characterImages = currentCharacters.map(
        (character) => character.image
    );

    const closeModal = () => {
        toggleModal(false);
    };

    return (
        <div className="TalkModal">
            <div className="TalkModal__close-btn" onClick={closeModal}>
                <GrFormClose size={30} />
            </div>
            <div className="TalkModal__characters">
                <div className="TalkModal__character">
                    <img
                        src={characterImages[0]}
                        alt=""
                        className="TalkModal__img"
                    />
                </div>
                {characterImages.length === 2 && (
                    <div className="TalkModal__character">
                        <img
                            src={characterImages[1]}
                            alt=""
                            className="TalkModal__img"
                        />
                    </div>
                )}
            </div>
            <div className="Dialogue">
                {testdialogue.map((dialogue) => (
                    <Speechbubble leftBubble={dialogue.leftBubble}>
                        {dialogue.text}
                    </Speechbubble>
                ))}
            </div>
        </div>
    );
}

export default TalkModal;
