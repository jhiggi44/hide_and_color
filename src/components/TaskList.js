import React, { useContext } from 'react';
import styled from 'styled-components';
import TaskItem from './TaskItem';
import closeIcon from '../images/close.svg';
import { DrawingContext } from '../App';

const Container = styled.div`
    background-color: #1CAC78;
    padding: 20px 10px;
    height: 98%;
    overflow: auto;
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

function TaskList(props) {
    const drawing = useContext(DrawingContext);

    return (
        <Container>
            <Close 
                src={closeIcon}
                onClick={(e) => props.setShowingTasks(false)}
            />
            <Header>Tasks</Header>
            <List>
                {drawing.tasks.map((task) => 
                    <TaskItem task={task.getTaskMsg(drawing.pattern)} isCompleted={false} />
                    )}
                <br/>
                {drawing.completed.map((c) => 
                    <TaskItem task={c.getTaskMsg(drawing.pattern)} isCompleted={true} />
                    )}
            </List>
        </Container>
    );
}

export default TaskList;