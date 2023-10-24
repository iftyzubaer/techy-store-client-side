import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARBk2qVduj96IuIWKF-MT3kSwICEVAq3o",
  authDomain: "techy-store-34d60.firebaseapp.com",
  projectId: "techy-store-34d60",
  storageBucket: "techy-store-34d60.appspot.com",
  messagingSenderId: "167014657871",
  appId: "1:167014657871:web:225db02def6bfc21129f3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;