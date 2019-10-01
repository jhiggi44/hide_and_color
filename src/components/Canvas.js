import React, { useState } from 'react';
import styled from 'styled-components';
import Crayon from './Crayon';
import Colors from '../classes/Colors';
import PatternManager from '../patterns/PatternManager.js';
import Menu from './Menu';

// import paper from '../images/paper.jpg';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: space-between;
    align-items: center;
    background-color: white;
    height: auto;
    min-height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden;
`;

const Message = styled.p`
    font-size: 35px;
`;

const CrayonBox = styled.div`
    white-space: nowrap;
    height: 200px;
    max-width: 100vw;
    overflow-y: hidden;
    overflow-x: scroll;
    margin-top: -70px;
`;

// import a Pattern list that contains all the keys

const colors = new Colors();

function Canvas() {
    const [selectedColor, setSelectedColor] = useState({code: "#EDEDED", name: "White" });
    const [message, setMessage] = useState("Complete the tasks above to unlock more pictures!");

    return(
        <Container>
            <Menu />
            <PatternManager setMessage={setMessage} colorCode={selectedColor.code} colorName={selectedColor.name} pattern="monkey" />
            <Message>{message}</Message>
            <CrayonBox id="colors" >
                {colors.easy.map((color) => 
                    <Crayon 
                        getColor={(fill) => setSelectedColor(fill)} 
                        isSelected= {(color.code === selectedColor.code)} 
                        color={color} 
                        key={color.code}
                        />)}
             </CrayonBox> 
        </Container>
    )
}

export default Canvas;