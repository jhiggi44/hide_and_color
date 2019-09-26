import React, { Component } from 'react';
import Canvas from './Canvas';

// imports all imgs/patterns from the patterns folder
function importAll(r) {
  let patterns = {};
  r.keys().map((item, index) => { patterns[item.replace('./', '')] = r(item); });
  return patterns;
}
const patterns = importAll(require.context('../patterns', false, /\.(png|jpe?g|svg)$/));

// console.log(patterns);

class RandomPattern extends Component {
  render() {
    return (
        <Canvas pattern={patterns['robot.svg']} colors={["rgb(14, 173, 145)", "rgb(224, 40, 51)", "rgb(241, 255, 38)",  "rgb(245, 157, 54)",  "rgb(250, 137, 188)", "rgb(106, 110, 109)"]} />
    );
  }
}

export default RandomPattern;