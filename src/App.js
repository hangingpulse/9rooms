import React from 'react'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './App.css';
import Grid from './components/Grid';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Grid />
      </div>
    </DndProvider>
  );
}

export default App;
