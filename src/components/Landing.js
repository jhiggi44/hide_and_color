import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Eyes from './Eyes';
import styled, { keyframes } from 'styled-components';
import title from '../images/color_title.svg';
import intro from '../images/intro_phrase.svg';

// 6 colors: 
const themes = [
    ["#3D90B3", "#FF4062", "#ABE7FF", "#C9C8B1", "#F0E600"]
]

// TODO: PASS THIS DOWN IN PROPS (FROM APP) AND FORMAT STYLED COMPONENTS
const dimensions = (function (){
    let w = window.innerWidth;
    let h = window.innerHeight;
    // accounts for the tab bar and sizes accordingly
    if ((w + 65) > h) {
        let d = h - 200;
        if (d < 300)
            return 300;
        return h - 200;
    }
    return w; 
})();

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const slideFadeIn = keyframes`
    0% {
        opacity: 0;
        transform: translate(0, 100px);
    }
    100% {
        opacity: 1;
        transform: translate(0, -40px);
    }
`;

const Container = styled.div`
    font-size: 2.5em;
    width: ${dimensions}px;
    margin-left: ${(window.innerWidth - dimensions) / 2}px;
`;

const Title = styled.object`
    height: 120px;
    width: 100%;
`;

const Intro = styled.object`
    // width: ${dimensions}px;
    // height: 130px;
    margin-left: 20px;
    margin-top: -${dimensions*.35}px;
    padding-bottom: 25px;
`;

// const IntroText = styled.div`
//     width: ${dimensions - 40}px;
//     height: 130px;
//     margin-left: 20px;
//     margin-top: -${dimensions*.35}px;
//     padding-bottom: 25px;
//     text-align: center;
//     color: black;
//     animation-name: ${fadeIn};
//     animation-duration: 3s;
//     animation-timing-function: ease;
//     animation-delay: 0s;
//     animation-iteration-count: 1;
//     animation-direction: normal;
//     animation-fill-mode: forwards;
//     animation-play-state: running;
// `;

const Button = styled.button`
    display: none;
    width: ${dimensions - 80}px;
    height: auto;
    margin-left: 40px;
    margin-top: 40px;
    padding: 10px 0px;
    font-size: inherit;
    text-align: center;
    background-color: ${themes[0][1]};
    color: black;
    border: none;
    border-radius: 15px;
    // box-shadow: 5px 5px 10px black;
    animation-name: ${slideFadeIn};
    animation-duration: 2s;
    animation-timing-function: ease;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: forwards;
    animation-play-state: running;
`;

const phrases = ["Oh no! It's really dark in here!", "Maybe it will help if you color me in..."];

function Landing() {

    const [pos, setPos] = useState(-5);

    // randomize eye movements, with clear bias toward left and right positions
    function moveEyes() {
        const eyesFwd = document.getElementById("eyesFwd");
        const eyesRight = document.getElementById("eyesRight");
        const eyesLeft = document.getElementById("eyesLeft");
        const eyeLids = document.getElementById("eyeLids");
        eyeLids.style.visibility = "visible";
        window.setTimeout(() => {
            eyesFwd.style.visibility = "hidden";
            eyesRight.style.visibility = "hidden";
            eyesLeft.style.visibility = "hidden";
            eyeLids.style.visibility = "hidden";
        }, 30);
        window.setTimeout(() => {
            let roll = Math.floor(Math.random() * 100);
            // console.log("roll" + roll);
            if (roll < 40) {
                eyesLeft.style.visibility = "visible";
            } else if (roll < 80) {
                eyesRight.style.visibility = "visible";
            } else {
                eyesFwd.style.visibility = "visible";
            }
        }, 100);
    }

    useEffect(() => {
        document.getElementsByTagName("body")[0].style.backgroundColor = themes[0][0];
        document.getElementById("eyeLids").style.fill = themes[0][0];
        document.getElementById("eyeLids").style.fill = themes[0][0];
        let colors = document.getElementsByClassName("eyeColor");
        for (let i = 0; i < colors.length; i++) {
            colors[i].style.fill = themes[0][2];
        }
        // const mySVG = document.getElementById("titleObj");
        // mySVG.addEventListener("load",function() {
        //     mySVG.contentDocument.getElementById("title").style.fill = themes[0][4];
        // });

        const introSVG = document.getElementById("intro");

        let introDiv = document.getElementById("intro");
        let btn = document.getElementById("button");
        window.setTimeout(() => {
            setPos(pos + 1);
        }, 50);
        if (pos % 25 === 0) {
            moveEyes();
        }
        //TODO: make 75 not a magic number...
        // if (pos % 75 === 0) {
            // let temp = introDiv.cloneNode();
            // introDiv.remove();
            // introDiv = temp;
            // document.getElementById("wrapper").appendChild(introDiv);
            // introDiv.innerText = phrases[(pos/75) % phrases.length];
        // }
        if (pos % 35 === 0) {
            // console.log("word");
            // const introSVG = document.getElementById("intro");
            // introSVG.addEventListener("load",function() {
                let txts = introSVG.contentDocument.getElementsByClassName("intro-text");
                if (txts.length > 0) {
                    txts[0].style.fill = themes[0][4];
                    txts[0].style.visibility = "visible";
                    txts[0].classList.remove("intro-text");
                }
                
            // });
        }
        if (pos >= 20 && !btn.style.display) {
            console.log(!btn.style.display);
            btn.style.display = "inherit";
        }
    });

    return (
        <Container id="container">
            {/* <Title id="titleObj" data={title} type="image/svg+xml"/> */}
            <Eyes size={dimensions} />
            {/* <div id="wrapper">
                <IntroText id="intro">
                </IntroText>   
            </div> */}
            <Intro id="intro" data={intro} type="image/svg+xml" />
            <Link to="/random">
                <Button id="button">
                    Let's Color!
                </Button>
            </Link>
        </Container>
    )
}
export default Landing;