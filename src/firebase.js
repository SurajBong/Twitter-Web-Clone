import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtD3T45NUU_kdP7rQgbai7ezvTNeNCngs",
  authDomain: "twitter-clone-f2b44.firebaseapp.com",
  databaseURL: "https://twitter-clone-f2b44.firebaseio.com",
  projectId: "twitter-clone-f2b44",
  storageBucket: "twitter-clone-f2b44.appspot.com",
  messagingSenderId: "718344739273",
  appId: "1:718344739273:web:a242d6a513452337e27018",
  measurementId: "G-LJLBK2E9JS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
