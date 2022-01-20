import  firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';



const firebaseConfig = {
  apiKey: "##############",
  authDomain: "################",
  databaseURL: "################",
  projectId:  "################",
  storageBucket:  "################",
  messagingSenderId:  "################",
  appId:  "################",
  measurementId:  "################",
};


export  const app = firebase.initializeApp(firebaseConfig);
 const db = app.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const auth = firebase.auth();



export default db;
