import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDBofRcj5aO7NHway9wr5x4kDq73sJporE",
    authDomain: "drive-clone-1d94b.firebaseapp.com",
    projectId: "drive-clone-1d94b",
    storageBucket: "drive-clone-1d94b.appspot.com",
    messagingSenderId: "40509163424",
    appId: "1:40509163424:web:d79f0553c2b73dfd49c6c5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, storage, auth, provider }