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
        <Canvas />
    );
  }
}

export default RandomPattern;