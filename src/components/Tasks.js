import React, { useState } from 'react';
import styled from 'styled-components';

import Task from './Task';
import closeIcon from '../images/close.svg';

const Container = styled.div`
    background-color: #1CAC78;
    padding: 20px 10px;
    height: 98%;
    overflow: visible;
`;

const Close = styled.img`
    position: absolute;
    top: 5%;
    right: 5%;
    width: 10%;
    max-width: 50px;
`;

const Header = styled.h2`
    font-size: 42px;
    text-align: center;
`;

const List = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px auto;
    width: 96%
    max-height: calc(100% - 150px);
    overflow-y: scroll;
`;

function Tasks(props) {
    return (
        <Container>
            <Close 
                src={closeIcon}
                onClick={(e) => props.setShowingTasks(false)}
            />
            <Header>Tasks</Header>
            <List>
                {props.tasks.map((task) => 
                        <Task task={task.task} isCompleted={task.isCompleted} />
                            )}
            </List>
        </Container>
    );
}

export default Tasks;