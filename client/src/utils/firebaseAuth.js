// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import firebaseConfig from "./../config/firebaseConfig.json";

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
