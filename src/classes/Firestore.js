const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: 'AIzaSyAgAW0Lgm8RN7-bNyokgeiDGjRt30pWiVc',
    projectId: 'hide-and-color'
});

class Firestore {
    constructor() {
        this.db = firebase.firestore();
    }

    getInfo(documentName) {
        return new Promise((res, rej) => {
            let ref = this.db.collection("greetings").doc(documentName);
            ref.get().then((doc) => {  
                console.log("Document data:", doc.data());
                res(doc.data());
            }).catch((error) => {
                console.log("Error getting document:", error);
                rej(error);
            });
        });
    }
}

export default Firestore;