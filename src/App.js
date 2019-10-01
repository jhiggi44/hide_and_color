import React from 'react';
import styled from 'styled-components';
import Canvas from './components/Canvas';
import Drawing from './classes/Drawing';

// Styled Components
const Container = styled.div`
  background-color: #3D90B3;
  height: 100vh;
  width: 100vw;
  overflow: scroll;
`;

let drawing = new Drawing(
  "monkey",
  [
    "arms",
    "head",
    "legs",
    "tail",
    "face",
    "nose",
    "mouth",
    "body",
    "stomach"
  ]
)

export const DrawingContext = React.createContext();
function App() {
  drawing.generateTasks(5);
  return (
    <Container>
      <DrawingContext.Provider value={drawing}>
        <Canvas />
      </DrawingContext.Provider>
    </Container>
  );
}

export default App;
