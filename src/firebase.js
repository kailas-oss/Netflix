import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
import {getFirestore} from"firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyDiGSZ8Zl8mRQ-tsYVVJnsQ9caRsVgvCPU",
    authDomain: "netflix-clone-b9093.firebaseapp.com",
    projectId: "netflix-clone-b9093",
    storageBucket: "netflix-clone-b9093.appspot.com",
    messagingSenderId: "977723196545",
    appId: "1:977723196545:web:ead99e9df22eda9237f980",
    measurementId: "G-7JKYQNMXHZ"
};
const app =initializeApp(firebaseConfig);
const auth =getAuth()
const db =getFirestore()
export {app, auth, db};