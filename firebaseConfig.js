import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCfOCOX_9BCk3m7txxXnF-NNXeMytAHMoo",
    authDomain: "blue-sky-d6c3e.firebaseapp.com",
    projectId: "blue-sky-d6c3e",
    storageBucket: "blue-sky-d6c3e.appspot.com",
    messagingSenderId: "1041129229138",
    appId: "1:1041129229138:web:6ac77c71abd62678f6c88b",
    measurementId: "G-E92CJ33ZGH"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
