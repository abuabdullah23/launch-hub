// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCYqGvOGH4g4myd8yjvuys3MCtUX1bhsl8",
    authDomain: "launce-hub.firebaseapp.com",
    projectId: "launce-hub",
    storageBucket: "launce-hub.appspot.com",
    messagingSenderId: "1455869207",
    appId: "1:1455869207:web:74ad75ae01d936fa28fb52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;