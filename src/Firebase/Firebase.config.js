// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhed9HEM9-KFH-DGfXBSiUVskpk7yzBtg",
  authDomain: "drogon-news-project.firebaseapp.com",
  projectId: "drogon-news-project",
  storageBucket: "drogon-news-project.firebasestorage.app",
  messagingSenderId: "1057724167082",
  appId: "1:1057724167082:web:f252611036e3ade30ff1d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;