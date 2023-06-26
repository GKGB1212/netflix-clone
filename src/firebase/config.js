// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAKdtd_KH5yp4_2PNHkrX9w5Mfw3Xol_64",
  authDomain: "netflix-clone-70289.firebaseapp.com",
  projectId: "netflix-clone-70289",
  storageBucket: "netflix-clone-70289.appspot.com",
  messagingSenderId: "31539574964",
  appId: "1:31539574964:web:89bd991c85b13c52c13fe1",
  measurementId: "G-NG0Q9VNSMP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const authentication = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider=new FacebookAuthProvider();
const githubProvider= new GithubAuthProvider();
export const signInWithGoogle = () => {
  signInWithPopup(authentication, googleProvider)
  .then((result)=>{
    console.log("result signInWithGG",result);
  })
  .catch((err)=>{
    console.log("error signInWithGG",err);
  })
}
export const signInWithFacebook= ()=>{
  signInWithPopup(authentication, facebookProvider)
  .then((result)=>{
    console.log("result signInWithFacebook", result);
    
  })
  .catch((error)=>{
    console.log("error signInWithFacebook", error)
  })
}
export const signInWithGithub=()=>{
  signInWithPopup(authentication, githubProvider)
  .then((result)=>{
    console.log("error signInWithGithub", result);
  })
  .catch((error)=>{
    console.log("error signInWithGithub", error)
  })
}