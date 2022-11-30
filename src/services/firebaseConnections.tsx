import firebase from "firebase/app";
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyDDX6IB0uOfGJWpKtfuc7sqf9uK3CMus_0",
    authDomain: "oficina-fortaleza.firebaseapp.com",
    projectId: "oficina-fortaleza",
    storageBucket: "oficina-fortaleza.appspot.com",
    messagingSenderId: "646278108530",
    appId: "1:646278108530:web:85dfbe6d1d10f20220b9eb"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;