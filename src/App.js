import React, { Component } from 'react';
import styled from 'styled-components';
import Views from './components/Views';

// const themes = [
//   ["#3D90B3", "#FF4062", "#ABE7FF", "#C9C8B1", "#F0E600"]
// ]

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
        <Views />
      </Container>
    );
  }
}

export default App;
