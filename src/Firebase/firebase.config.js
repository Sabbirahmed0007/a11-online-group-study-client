// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9IyNo8yW1yeDuuoBTnAnbDjx_vHEF3Iw",
  authDomain: "online-group-study-13dd6.firebaseapp.com",
  projectId: "online-group-study-13dd6",
  storageBucket: "online-group-study-13dd6.appspot.com",
  messagingSenderId: "229280751758",
  appId: "1:229280751758:web:b939976494c2696bbee9df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);

export default auth ;