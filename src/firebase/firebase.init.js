// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNZv5RW4DZQqG2cAck95sB1L1_Ose8qI0",
  authDomain: "emplyee-react.firebaseapp.com",
  projectId: "emplyee-react",
  storageBucket: "emplyee-react.firebasestorage.app",
  messagingSenderId: "619081029984",
  appId: "1:619081029984:web:32f36442798b04c2c5e605",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
