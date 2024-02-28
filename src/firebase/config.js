// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxaaVW0V3ompvhr40Q7s8YIpev95ocJME",
  authDomain: "collabora-auth.firebaseapp.com",
  projectId: "collabora-auth",
  storageBucket: "collabora-auth.appspot.com",
  messagingSenderId: "113926453950",
  appId: "1:113926453950:web:cdcb5f8e7f1ec270f9fcef",
  measurementId: "G-L73945PBTJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);