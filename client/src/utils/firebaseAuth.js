import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBGKjV2Sc8PaEWfLyEXND3lKworsOLtVaw",
    authDomain: "testproject-99773.firebaseapp.com",
    projectId: "testproject-99773",
    storageBucket: "testproject-99773.appspot.com",
    messagingSenderId: "444290216430",
    appId: "1:444290216430:web:eb238185b1c8c8bd465eff",
    measurementId: "G-FY33TZK7F4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
