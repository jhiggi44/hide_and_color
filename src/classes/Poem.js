class Poem {
    // Parameter poem: poems are formatted as arr of strings and arrays of strings
    // such as this: ["line", "line", ["conditional", "conditional"], "line"] 
    // Parameter pattern: Is the pattern to follow when getPoem is called. 
    // [0, 0, 1, 1] indicates to use the 0th element of the indicesArr twice, then the 1th element twice. 
    constructor(poem, pattern, numOfConds) {
        this.poem = poem;
        this.pattern = pattern;
        this.numOfConds = numOfConds;
    }
    // indicesArr indicates which conditional lines of the poem to include based on colors used
    // It will derive be generated automatically by the Canvas.js component, which will call getPoem()
    getPoem(indicesArr) {
        if (indicesArr.length !== this.numOfConds)
            return "If you color me in, I will tell you something fun!";

        let condSelector = []
        for (let i = 0; i < this.pattern.length; i++) {
            condSelector.push(indicesArr[this.pattern[i]])
        }
        let poemStr = "";
        for (let i = 0; i < this.poem.length; i++) {
            if(Array.isArray(this.poem[i]))
                poemStr += this.poem[i][condSelector.shift()] + "\n";
            else 
                poemStr += this.poem[i] + "\n";
        }
        return poemStr;
    }
}

export default Poem;
