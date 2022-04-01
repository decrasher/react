import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";


const firebaseConfig = {
    apiKey: "AIzaSyDkiKFWGz0AO7zMz1GdKBZkgHpv_QiDseM",
    authDomain: "talestory-ed61f.firebaseapp.com",
    projectId: "talestory-ed61f",
    storageBucket: "talestory-ed61f.appspot.com",
    messagingSenderId: "984306169505",
    appId: "1:984306169505:web:3aebcdfc2dc0fa331022e0",
    measurementId: "G-T7N5RNK022"
  };

export default firebase.initializeApp(firebaseConfig);