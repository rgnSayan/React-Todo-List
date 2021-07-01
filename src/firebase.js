import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB-AirLmazqtFyTc5dlF51gy-f201fcL6A",
    authDomain: "react-todo-app-beaa6.firebaseapp.com",
    projectId: "react-todo-app-beaa6",
    storageBucket: "react-todo-app-beaa6.appspot.com",
    messagingSenderId: "377345660119",
    appId: "1:377345660119:web:21844dc79e8c6309350c92",
    measurementId: "G-XKQVJNLPXQ"
})

const db = firebaseApp.firestore();

export default db;
