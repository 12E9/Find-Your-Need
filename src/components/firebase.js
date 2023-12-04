// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVh7cLRFGBEOto2XBVqlFeoZKpQGAZWdE",
  authDomain: "find-your-need.firebaseapp.com",
  projectId: "find-your-need",
  storageBucket: "find-your-need.appspot.com",
  messagingSenderId: "772418344980",
  appId: "1:772418344980:web:001b0de47a32040c006f01",
  measurementId: "G-ZNGLYTXG90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
// const analytics = getAnalytics(app);