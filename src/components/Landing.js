import React, {useState} from 'react';
import styled from 'styled-components';

import NextButton from './NextButton';
import Eyes from './Eyes';
import intro from '../images/intro_phrase.svg';

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

const Container = styled.div`
    font-size: 2.5em;
    width: ${dimensions}px;
    margin-left: ${(window.innerWidth - dimensions) / 2}px;
`;

const Intro = styled.object`
    margin-left: 20px;
    margin-top: -${dimensions*.35}px;
    padding-bottom: 25px;
`;

function Landing() {
    const [showNext, setShowNext] = useState(false);

    return (
        <Container id="container">
            <Eyes size={dimensions} showButton={setShowNext} />
            <Intro id="intro" data={intro} type="image/svg+xml" />
            <NextButton color="#FF4062" path="/random" isShowing={true} />
        </Container>
    )
}
export default Landing;