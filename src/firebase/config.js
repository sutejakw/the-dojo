import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDyVpSxEuqgW8npR3HkmjXFyqNnQPSrZ-M",
  authDomain: "thedojosite-f4b9b.firebaseapp.com",
  projectId: "thedojosite-f4b9b",
  storageBucket: "thedojosite-f4b9b.appspot.com",
  messagingSenderId: "925709249489",
  appId: "1:925709249489:web:21a57722725f02303f4ef0",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebse.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
