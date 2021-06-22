// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyARlMQqJCYRzAAkKVVmKYZW-L3551fOFjc",
//     authDomain: "todo-app-cp-6e18e.firebaseapp.com",
//     projectId: "todo-app-cp-6e18e",
//     storageBucket: "todo-app-cp-6e18e.appspot.com",
//     messagingSenderId: "37320520733",
//     appId: "1:37320520733:web:9fbe0061aead83f52b02f4",
//     measurementId: "G-2X0QJSS5XZ"
//   };

import firebase from "firebase";

const firebaseApp =firebase.initializeApp({
    apiKey: "AIzaSyARlMQqJCYRzAAkKVVmKYZW-L3551fOFjc",
    authDomain: "todo-app-cp-6e18e.firebaseapp.com",
    projectId: "todo-app-cp-6e18e",
    storageBucket: "todo-app-cp-6e18e.appspot.com",
    messagingSenderId: "37320520733",
    appId: "1:37320520733:web:9fbe0061aead83f52b02f4",
    measurementId: "G-2X0QJSS5XZ"

});

const db = firebaseApp.firestore();

export default db;