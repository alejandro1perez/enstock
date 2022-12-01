import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAJ7MEFBkhOOro51askrO_4k3ihxHwjmhQ",
    authDomain: "ecommerce-react-f286c.firebaseapp.com",
    projectId: "ecommerce-react-f286c",
    storageBucket: "ecommerce-react-f286c.appspot.com",
    messagingSenderId: "479120206515",
    appId: "1:479120206515:web:f995682871a609a5a49ec6",
    measurementId: "G-YRKRZE5VTL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

