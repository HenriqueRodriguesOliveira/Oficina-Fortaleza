import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';



let firebaseConfig = {
    apiKey: "AIzaSyD9nv1W9Twwaaz0Q7uxTu34HmESjCZ3uik",
    authDomain: "oficina-fortaleza-5f598.firebaseapp.com",
    databaseURL: "https://oficina-fortaleza-5f598-default-rtdb.firebaseio.com",
    projectId: "oficina-fortaleza-5f598",
    storageBucket: "oficina-fortaleza-5f598.appspot.com",
    messagingSenderId: "1055811051210",
    appId: "1:1055811051210:web:88f4fa9222de7cc1de5e33"
};

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;