import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBj-h6or3JRm8HmTg9gmsVZDYogETOdELY",
  authDomain: "linkedin-clone-c25ca.firebaseapp.com",
  projectId: "linkedin-clone-c25ca",
  storageBucket: "linkedin-clone-c25ca.appspot.com",
  messagingSenderId: "878809510198",
  appId: "1:878809510198:web:49202498299fab77df0397",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
