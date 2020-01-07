import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC3g8mmvZDqirJksTHumhoN7iNWHVA0_Ss",
  authDomain: "crwn-db-5ca60.firebaseapp.com",
  databaseURL: "https://crwn-db-5ca60.firebaseio.com",
  projectId: "crwn-db-5ca60",
  storageBucket: "crwn-db-5ca60.appspot.com",
  messagingSenderId: "608596260761",
  appId: "1:608596260761:web:f4c422a9b1a33d04914508",
  measurementId: "G-PCBSGN6ERP"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
