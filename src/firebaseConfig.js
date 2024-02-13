import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDrsZiiwUrER_7EDddKOJ8nYpxLey9NhDg",
    authDomain: "coursework-4bce3.firebaseapp.com",
    databaseURL: "https://coursework-4bce3-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "coursework-4bce3",
    storageBucket: "coursework-4bce3.appspot.com",
    messagingSenderId: "102435813238",
    appId: "1:102435813238:web:73cd4643f6dbdc0107ec57",
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;