import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import Grid from "./components/Grid/Grid";
import { GameProvider } from "./provider/GameProvider";
import Header from "./components/Header/Header";
import "./App.css";

function App() {
    return (
        <DndProvider backend={HTML5Backend}>
            <div className="App">
                <Header />
                <GameProvider>
                    <Grid />
                </GameProvider>
            </div>
        </DndProvider>
    );
}

export default App;
