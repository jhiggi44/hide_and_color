import React from 'react';
import styled from 'styled-components';

import checked from '../images/checked.svg';
import unchecked from '../images/unchecked.svg';

const Container  = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: auto;
    box-sizing: border-box;
    padding: 10px;
    background-color: white;
    margin: 5px 0;
    border-radius: 5px;
`;

const Check = styled.img`
    width: 15%;
    max-width: 50px;
    margin-right: 5px;
`;

const Txt = styled.div`
    margin: 0 auto;
    font-size: 38px;
    text-align: center;
    padding: 5px;
`;

function TaskItem(props) {
    return (
        <Container>
            <Check src={(props.isCompleted ? checked : unchecked)} />
            <Txt>{props.task}</Txt>
        </Container>
    );
}

export default TaskItem;