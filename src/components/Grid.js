import React from "react";
import Room from "./Room";
import "./Grid.css";
import rooms from "../gamedata/rooms";

function Grid() {
    return (
        <div className="Grid">
            <div className="row row--1">
                {rooms.map((room) => (
                    <Room key={room.id} room={room} />
                ))}
            </div>
        </div>
    );
}

export default Grid;
