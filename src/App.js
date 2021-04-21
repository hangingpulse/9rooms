import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./App.css";
import Grid from "./components/Grid";
import { GameProvider } from "./provider/GameProvider";

function App() {
    return (
        <DndProvider backend={HTML5Backend}>
            <div className="App">
                <GameProvider>
                    <Grid />
                </GameProvider>
            </div>
        </DndProvider>
    );
}

export default App;
