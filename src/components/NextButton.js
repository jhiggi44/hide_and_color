import React from 'react';
import { Link } from 'react-router-dom';
import styled, {keyframes } from 'styled-components';

import nextIcon from '../images/icons/right.png';

const riseFadeIn = keyframes`
    0% {
        opacity: 0;
        transform: translate(0, 0px);
    }
    100% {
        opacity: 1;
        transform: translate(0, -40px);
    }
`;

const Button = styled.button`
    position: absolute;
    right: 80px;
    bottom: 20px;
    width: 80px;
    height: 80px;
    margin: 0 auto;
    padding: 3px 0px;
    font-size: inherit;
    text-align: center;
    background-color: ${props => props.color};
    color: black;
    border: none;
    border-radius: 55px;
    animation-name: ${riseFadeIn};
    animation-duration: 2s;
    animation-timing-function: ease;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: forwards;
    animation-play-state: running;
`;

function NextButton(props) {
    if (props.isShowing) {
        return (
            <Link to={props.path}>
                <Button color={props.color} id="button">
                    <img src={nextIcon} style={{ width: "80px" }}/>
                </Button>
            </Link>
        );
    } else {
        return (
            <div></div>
        );
    }
}

export default NextButton;