import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAGb8ojrP5JiYHTUgQy_DIG0IGzCjEoDQE",
    authDomain: "comfort-zone-c907b.firebaseapp.com",
    projectId: "comfort-zone-c907b",
    storageBucket: "comfort-zone-c907b.appspot.com",
    messagingSenderId: "211947614551",
    appId: "1:211947614551:web:ed475454d7138841058e12",
    measurementId: "G-ERRKM9BFLD"
  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result)
        // const name = result.user.displayName;
        // const email = result.user.email;
        // const profilePic = result.user.photoURL;
        }).catch((error) =>{
          console.log(error)
        })
      }
  
  export const auth = getAuth(app)
  
  
  export const logOut = () => {
    signOut(auth);
   
  };
 