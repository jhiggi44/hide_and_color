import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import ReactModal from 'react-modal';
import TaskList from './TaskList';
import settings from '../images/settings.svg';
import lock from '../images/keyhole.svg';
import key from '../images/key.svg';
import next from '../images/next.svg';
import { DrawingContext } from '../App';

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

function Menu() {
    const [isShowingTasks, setShowingTasks] = useState(false);
    let drawing = useContext(DrawingContext);

    return (
        <Container>
            <Icon src={settings} margins="0 auto"/>
            <Task
                onClick={(e) => setShowingTasks(true)}
            >
                {drawing.getNextTask()}
            </Task>
            <Icon src={key} margins="none" />
            <Icon src={(drawing.isComplete()) ? next : lock} margins="0 auto" />
            <ReactModal 
                isOpen={isShowingTasks}
                contentLabel="Task List"
                style={{ 
                    content: { 
                        width: "94%", 
                        height: "96%", 
                        padding: "0", 
                        border: "none", 
                        borderRadius: "5px", 
                        margin: "0", 
                        left: "3%", 
                        top: "2%" 
                    } 
                }}
            >
                <TaskList setShowingTasks={setShowingTasks} />
            </ReactModal>
        </Container>
    )
}

export default Menu;