import React from "react";
import "./Speechbubble.css";

function Speechbubble({ leftBubble, children }) {
    return (
        <div
            className={
                leftBubble ? "Speechbubble--left" : "Speechbubble--right"
            }
        >
            <p className="Speechbubble__text">{children}</p>
        </div>
    );
}

export default Speechbubble;
