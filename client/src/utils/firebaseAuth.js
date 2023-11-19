import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCY4GwN-2OLHB8QQT5-Xk8r7pmztU0_Aws",
    authDomain: "spark-se-oasis-wellbeing-bu.firebaseapp.com",
    projectId: "spark-se-oasis-wellbeing-bu",
    storageBucket: "spark-se-oasis-wellbeing-bu.appspot.com",
    messagingSenderId: "71153214742",
    appId: "1:71153214742:web:72e99048241cc0f3a9dc37",
    measurementId: "G-QZXNDB0WM5",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
