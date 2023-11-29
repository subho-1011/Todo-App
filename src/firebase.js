// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBH8OekcTmOYUVtlY63npNHgMLsr64WuDo",
    authDomain: "todo-app-5c7e6.firebaseapp.com",
    projectId: "todo-app-5c7e6",
    storageBucket: "todo-app-5c7e6.appspot.com",
    messagingSenderId: "143141138957",
    appId: "1:143141138957:web:5b9bcbeb45ddb15ce1db44",
    measurementId: "G-BJ25XMWCN3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);