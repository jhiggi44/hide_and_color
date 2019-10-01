import React from 'react';
import Monkey from "./Monkey.js";

const dimensions = (() => {
    let w = window.innerWidth;
    let h = window.innerHeight;
    if ((w + 65) > h) {
        // if height minus the size of the crayonbox is less than 300, then return height as the minimum
        if ((h - 200) < 300)
            return h;
        return h - 300;
    }
    return w; 
})();

function PatternManager(props) {
    // ADD TO PATTERN MAP WHEN ADDING A PATTERN
    const patternMap = {
        monkey: <Monkey size={`${dimensions}px`} setMessage={props.setMessage} colorCode={props.colorCode} colorName={props.colorName}  />
    }
    return patternMap[props.pattern];
}

export default PatternManager;