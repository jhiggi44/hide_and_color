import React, { Component } from 'react';
import styled from 'styled-components';

import Canvas from './components/Canvas';

// Styled Components
const Container = styled.div`
  background-color: #3D90B3;
  height: 100vh;
  width: 100vw;
  overflow: scroll;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Canvas />
      </Container>
    );
  }
}

export default App;
