import  firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyAAN_MZ7IxyAylU1YLbso07pbJKSOIFX5g",
  authDomain: "crypto-97a92.firebaseapp.com",
  databaseURL: "https://crypto-97a92-default-rtdb.firebaseio.com",
  projectId: "crypto-97a92",
  storageBucket: "crypto-97a92.appspot.com",
  messagingSenderId: "930079349896",
  appId: "1:930079349896:web:e0f10ab7f19eac1ef4933d",
  measurementId: "G-165WYMW98R",
};


export  const app = firebase.initializeApp(firebaseConfig);
 const db = app.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const auth = firebase.auth();



export default db;





/*


import * as firebase from 'firebase/compat/app';

import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/firestore';


import { initializeApp } from "firebase"

const firebaseApp = initializeApp({ 

  apiKey: "AIzaSyAAN_MZ7IxyAylU1YLbso07pbJKSOIFX5g",
  authDomain: "crypto-97a92.firebaseapp.com",
  databaseURL: "https://crypto-97a92-default-rtdb.firebaseio.com",
  projectId: "crypto-97a92",
  storageBucket: "crypto-97a92.appspot.com",
  messagingSenderId: "930079349896",
  appId: "1:930079349896:web:e0f10ab7f19eac1ef4933d",
  measurementId: "G-165WYMW98R"
});


;
const db = firebaseApp.firestore();

export default db;
************************************


import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

import * as firebase from 'firebase/compat/app';

import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/firestore';
import { FiberManualRecord } from '@material-ui/icons';

const firebaseConfig = {
 apiKey: "AIzaSyAAN_MZ7IxyAylU1YLbso07pbJKSOIFX5g",
  authDomain: "crypto-97a92.firebaseapp.com",
  databaseURL: "https://crypto-97a92-default-rtdb.firebaseio.com",
  projectId: "crypto-97a92",
  storageBucket: "crypto-97a92.appspot.com",
  messagingSenderId: "930079349896",
  appId: "1:930079349896:web:e0f10ab7f19eac1ef4933d",
  measurementId: "G-165WYMW98R"
};

const app = initializeApp(firebaseConfig);

const  database = getDatabase(app);

export default database;






















*/