import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB23PeBzukx1iZN__XH9AKWRfWG0BlKqxk",
  authDomain: "gym-training-57bba.firebaseapp.com",
  projectId: "gym-training-57bba",
  storageBucket: "gym-training-57bba.appspot.com",
  messagingSenderId: "225994676797",
  appId: "1:225994676797:web:bb260f1027efb111a6e854",
  measurementId: "G-JE7DCE0ED8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app)

export default auth;