// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDduiqeJAuL_UdGU-UxEOuDus_6Vv3IbvA",
  authDomain: "coffee-store-d12f2.firebaseapp.com",
  projectId: "coffee-store-d12f2",
  storageBucket: "coffee-store-d12f2.appspot.com",
  messagingSenderId: "1004188529062",
  appId: "1:1004188529062:web:9a94f980b3dc08b40c1f67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;