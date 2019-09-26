import React, {Component} from 'react';
import styled, {keyframes} from 'styled-components';
import Crayon from './Crayon';
import Poem from '../classes/Poem';

// some sizing variables
const crayonWidth = 80;

const dimensions = (function (){
    let w = window.innerWidth;
    let h = window.innerHeight;
    if ((w + 65) > h) {
        // if height minus the size of the crayonbox is less than 300, then return height as the minimum
        if ((h - 200) < 300)
            return h;
        return h - 200;
    }
    return w; 
})();

function calculateCanvasOffset(maxWidth) {
    let leftOffset = (window.innerWidth - maxWidth) / 2;
    if (leftOffset <= 0) {
        return 0;
    } 
    // console.log(`offset is ${offset}`);
    return leftOffset;
}

function calculateColorsOffset(numOfColors) {
    let w = window.innerWidth;
    let offset = (w / 2) - ((crayonWidth * numOfColors)/2);
    if (offset <= 0) {
        return 0;
    } 
    // console.log(`offset is ${offset}`);
    return offset;
}

// Got this from: https://stackoverflow.com/questions/35969656/how-can-i-generate-the-opposite-color-according-to-current-color
function invertColor(hex) {
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
        throw new Error('Invalid HEX color.');
    }
    // invert color components
    var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
        g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
        b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
    // pad each with zeros and return
    return '#' + padZero(r) + padZero(g) + padZero(b);
}

function padZero(str, len) {
    len = len || 2;
    var zeros = new Array(len).join('0');
    return (zeros + str).slice(-len);
}

const NavBar = styled.div`
    height: 40px;
`;

// Styled Components
const CrayonBox = styled.div`
    white-space: nowrap;
    height: 200px;
    max-width: 100vw;
    margin-top: -50px;
    // position: absolute;
    // top: calc(100vh - 200px);
    overflow-y: hidden;
    overflow-x: scroll;
    // z-index: 1;
`;

const TextBubble = styled.div`
    margin-top: 10%;
    margin-left: calc((100vw - ${dimensions}px)/2);
    height: auto;
    max-width: ${dimensions}px;
`;

const TextDisplay = styled.div`
    padding: 20px 20px;
    border: none;
    border-radius: 15px;
    overflow-y: scroll;
    font-size: 30px;
    text-align: center;
    // mix-blend-mode: ;
`;

const Tail = styled.div`
    margin: auto;
    margin-top: -5px;
    height: 140px;
    width: 140px;
    -webkit-clip-path: polygon(26% 0, 49% 68%, 73% 0);
    clip-path: polygon(26% 0, 49% 68%, 73% 0);
`;

const FloatingBtn = styled.div`
    position: sticky;
    top: 40px;
    left: 80%;
    z-index: 1;
    height: 65px;
    width: 65px;
    color: white;
    border: none;
    border-radius: 50%;
    // mix-blend-mode: darken;
    font-size: 40px;
    text-align: center;
`;

class Canvas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pattern: props.pattern,
            colors: props.colors,
            conditionals: [],
            statics: [],
            selected: "black",
            svgDoc: undefined,
            txt: "If you color me in, I will tell you something fun!"
        }
        this.handleHint = this.handleHint.bind(this);
        this.getPoem = this.getPoem.bind(this);
        // this.isReadyForText = this.isReadyForText.bind(this);
    }

    handleHint() {
        document.getElementById("colors").scrollIntoView({ 
            behavior: 'smooth',
            block: "end"
        });
        let toColor = this.state.svgDoc.getElementsByClassName("to-color");
        let elRef = Math.floor(Math.random() * Math.floor(toColor.length)); 
        console.log("static ref " + elRef);
        let colorRef = Math.floor(Math.random() * Math.floor(this.state.colors.length)); 
        console.log("color ref " + colorRef);
        toColor[elRef].style.fill = this.state.colors[colorRef];
    }

    getPoem() {
        const lines = [
            "Who knows what TV’s will be like in the future...</br>",
            [
                "Maybe they’ll hover in the air so still,</br>", 
                "Maybe they’ll be like goggles that attach to our heads,</br>",
                "Maybe they'll jiggle like jello,</br>",
                "Maybe they’ll make unbelievable sound, </br>",
                "Maybe they’ll be able to shrink,</br>",
                "Maybe they'll be smart as a geek, </br>"
            ],
            "Or maybe they’ll be more robotic,</br>",
            [
                "And have eyes that are a green-blue teal.</br>",
                "And have eyes the deepest of reds.</br>",
                "And have eyes bright and yellow.</br>",
                "And have eyes so orange and round.</br>",
                "And have eyes light and pink.</br>",
                "And have eyes grey and sleek.</br>"
            ],
            "</br>What if they eat potato chips and drink soda,</br>",
            [
                "With arms green like a snake,</br>",
                "With arms ruby red like licorice,</br>",
                "With arms yellow like a spaghetti noodle,</br>",
                "With arms as orange as a tiger’s tail,</br>",
                "With arms curly like the tail of a pig,</br>",
                "With arms strong like steel,</br>"
            ],
            "Will they watch other TV’s when they are bored?</br>",
            [
                "Or will they bake cookies and birthday cake.</br>",
                "Or will they go to the lake and fish.</br>",
                "Or will they pick up a pen and doodle.</br>",
                "Or will they be vegetarian and run off nothing but kale.</br>",
                "Or will they dress up in a stylish wig.</br>",
                "And make tv dinners for a meal.</br>"
            ],
            "\nI guess we will have to wait to watch the future of TVs!</br>"
        ];

        let indicesArr = [];
        // TODO: 2 needs to be changed to this.poem.condNum.....
        for (let i = 0; i < 2; i++) {
            let color = this.state.svgDoc.getElementsByClassName(`conditional-${i}`)[0].style.fill;
            if (!color) { // TODO: RETURN PROPER STRING 
                console.log("Not Colored!!!!");
            } 
            for (let j = 0; j < this.state.colors.length; j++) {
                if (this.state.colors[j] === color) {
                    indicesArr.push(j);
                }
            }
        }
        console.log(indicesArr);
        console.log(new Poem(lines, [0, 0, 1, 1], 2).getPoem(indicesArr))
        return new Poem(lines, [0, 0, 1, 1], 2).getPoem(indicesArr);
    }

    addColorChangeListener(type, i) {
        let whichColorState = this.state.statics;
        if (type === "conditional") {
            whichColorState = this.state.conditionals;
        } 

        for(let j = 0; j < whichColorState[i].length; j++) {
            whichColorState[i][j].addEventListener("click", (e) => {
                let nodes = this.state.svgDoc.getElementsByClassName(`${type}-${i}`);
                for (let k = 0; k < nodes.length; k++) {
                    nodes[k].style.fill = this.state.selected;
                    nodes[k].style.stopColor = this.state.selected;
                }
                // this.checkComplete();
                let temp = whichColorState.slice();
                temp[i] = nodes;
                this.setState({ whichColorState: temp });
            });
        }
    }

    conditionalColorsInit(numOfConditionals) {
        for (let i = 0; i < numOfConditionals; i++) {
            let nodes = this.state.svgDoc.getElementsByClassName(`conditional-${i}`);
            let temp = this.state.conditionals.slice();
            temp.push(nodes);
            this.setState({conditionals: temp});
            this.addColorChangeListener("conditional", i);
        }
    }

    staticColorsInit(numOfStatics) {
        for (let i = 0; i < numOfStatics; i++) {
            let nodes = this.state.svgDoc.getElementsByClassName(`static-${i}`);
            let temp = this.state.statics.slice();
            temp.push(nodes);
            this.setState({statics: temp});
            this.addColorChangeListener("static", i);
        }
    }

    //function to pass to child, use .bind() there
    getColor = (fill) => {
        this.setState({
            selected: fill
        })
    }

    componentDidMount() {
        // refers to the object tag containing the svg
        const mySVG = document.getElementById("pattern");
        mySVG.addEventListener("load",function() {
            this.setState({ svgDoc: mySVG.contentDocument });
            
            // DO A LOOP FOR EACH CONDITIONAL
            const numConditions = 2;
            const numStatics = 10;

            this.conditionalColorsInit(numConditions);
            this.staticColorsInit(numStatics);

            // this.state.svgDoc.getElementById("background").style.fill = "black";
        }.bind(this), false);
        
        if (!this.state.colors[0].search(", ")) {
            let temp = [];
            for (let i = 0; i < this.state.colors.length; i++) {
                temp.push(this.state.colors[i].replace(/,/g, ", "));
            }
            this.setState({ colors: temp });
        }
    }

    componentDidUpdate() {
        console.log("displaytext")
        const txtDisplay = document.getElementById("textDisplay");
        let temp = this.getPoem();
        if (temp != this.state.txt) {
            document.getElementById("bubble").scrollIntoView({ 
                behavior: 'smooth' 
            });
            this.setState({ txt: temp });
        }
        txtDisplay.innerHTML = this.state.txt;
        txtDisplay.style.backgroundColor = this.state.colors[0];
        document.getElementById("tail").style.backgroundColor = this.state.colors[0];
        document.getElementById("action").style.backgroundColor = this.state.colors[1];
    }

    render() {
        return (
            <div id="container" style={{ maxHeight: "100vh", overflowY: "scroll" }}>
                <NavBar />
                <FloatingBtn onClick={ this.handleHint } id="action">
                    <a>
                        <div style={{paddingTop: "10px"}}>?</div>
                    </a>
                </FloatingBtn>
                <TextBubble id="bubble" >
                    <TextDisplay id="textDisplay"/>
                    <Tail id="tail" />
                </TextBubble>
                <object style={{ marginLeft: `${calculateCanvasOffset(dimensions)}px`, width: `${dimensions}px`, height: `${dimensions}px`}} id="pattern" data={this.state.pattern} type="image/svg+xml"> Your browser doesn't support SVG</object>
                <CrayonBox id="colors"  style={{paddingLeft: `${calculateColorsOffset(this.state.colors.length)}px`}}>
                    {this.state.colors.map((color) => <Crayon getColor={this.getColor} isSelected= {(color === this.state.selected)} fill={color} key={color}/>)}
                </CrayonBox> 
            </div>
        )
    }
}

export default Canvas;