import React, { useState } from 'react';
import styled from 'styled-components';
import ReactModal from 'react-modal';
import Tasks from './Tasks';
import settings from '../images/settings.svg';
import lock from '../images/keyhole.svg';
import key from '../images/key.svg';
import unchecked from '../images/unchecked.svg';

const Container = styled.div`
    height: 54px;
    width: 100%;
    padding: 15px 0;
    margin-bottom: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: space-between;
    align-items: center;
    background-color: #1CAC78;
    box-shadow: 3px 3px 8px grey;
`;

const Icon = styled.img`
    height: 100%;
    margin: ${props => props.margins}
    padding: 5px;

    :active {
        border-radius: 35px;
        background-color: #158078;
    }
    
`;

const Task = styled.p`
    padding: 8px;
    font-size: 28px;
    background-color: white;
    border-radius: 5px;
    max-width: 500px;
    width: auto;
    height: 42px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-right: 5px;

    :hover {
        background-color: #f9dd8f;
    }
`;

const tasks = [
    {
        task: "Color one of the monkey's ears green",
        isCompleted: false
    }, 
    {
        task: "Color the monkey's tail blue",
        isCompleted: true
    }, 
    {
        task: "Color one of the monkey's arms red",
        isCompleted: false 
    }
];

function Menu() {
    const [isShowingTasks, setShowingTasks] = useState(false);

    return (
        <Container>
            <Icon src={settings} margins="0 auto"/>
                <Icon src={key} margins="none" />
                <Task
                    onClick={(e) => setShowingTasks(true)}
                >
                    This is a task!!! a really really really long task 
                </Task>
            <Icon src={lock} margins="0 auto"/>
            <ReactModal 
                isOpen={isShowingTasks}
                contentLabel="Task List"
                style={{ content: { width: "94%", height: "96%", padding: "0", border: "none", borderRadius: "5px", margin: "0", left: "3%", top: "2%" } }}
            >
                <Tasks setShowingTasks={setShowingTasks} tasks={tasks} />
            </ReactModal>
        </Container>
    )
}

export default Menu;