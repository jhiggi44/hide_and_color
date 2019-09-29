class Drawing {
    constructor() {
        this.isReady = false;
    }
    prepare(svgDoc, addColor) {
        this.isReady = true;
        this.svgDoc = svgDoc;
        console.log(this.svgDoc);

        let statics = this.svgDoc.getElementsByClassName("static");
        for (let i = 0; i < statics.length; i++) {
             statics[i].addEventListener("click", (e) => {
                console.log(statics[i]);
                statics.stroke = "black";
                addColor(1);
            });
        }
           
    }
}

export default Drawing;