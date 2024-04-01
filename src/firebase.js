// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtXEkdOUy52p8JR_lyI9Ye1kzgY3VIQjc",
  authDomain: "fromsinreact.firebaseapp.com",
  databaseURL: "https://fromsinreact-default-rtdb.firebaseio.com",
  projectId: "fromsinreact",
  storageBucket: "fromsinreact.appspot.com",
  messagingSenderId: "1061951863876",
  appId: "1:1061951863876:web:26b955b612b6d5d241d011"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};