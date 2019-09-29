class Greeting {
    // Parameter poem: poems are formatted as arr of strings and arrays of strings
    // such as this: ["line", "line", ["conditional", "conditional"], "line"] 
    // Parameter pattern: Is the pattern to follow when getPoem is called. 
    // [0, 0, 1, 1] indicates to use the 0th element of the indicesArr twice, then the 1st element twice. 
    // in other words, if the 1st conditional color changes two lines, the first and second conditional spot.
    constructor(greeting, pattern, numOfConditionals) {
        this.greeting = greeting;
        this.pattern = pattern;
        this.numOfConditionals = numOfConditionals;
    }
    // conditionalColors is an array of the colors used on the conditional parts of the drawing
    getGreeting(conditionalColors) {
        if (conditionalColors.length !== this.numOfConditionals)
            return "If you color me in, I will tell you something fun!";

        let conditionalSelector = []
        for (let i = 0; i < this.pattern.length; i++) {
            conditionalSelector.push(conditionalColors[this.pattern[i]])
        }
        let greetingStr = "";
        for (let i = 0; i < this.greeting.length; i++) {
            if(typeof this.greeting[i] === "object"){
                greetingStr += this.greeting[i][conditionalSelector.shift()]
            } else {
                greetingStr += this.greeting[i];
            }
            greetingStr += "\n";  
        }
        return greetingStr;
    }
}

export default Greeting;
