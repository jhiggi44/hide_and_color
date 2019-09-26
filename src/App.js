import React, { Component } from 'react';
import styled from 'styled-components';
import Views from './components/Views';

// Styled Components
const Container = styled.div`
  background-color: transparent;
  height: 100vh;
  width: 100vw;
  overflow: scroll;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Views />
      </Container>
    );
  }
}

export default App;
