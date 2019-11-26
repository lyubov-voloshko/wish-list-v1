import 'firebase/firestore'
import 'firebase/auth'

import firebase from 'firebase/app';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA4BJf1CbGVZ-CH8U9FxIwjyjfHa4b1SRE",
    authDomain: "wish-list-6144b.firebaseapp.com",
    databaseURL: "https://wish-list-6144b.firebaseio.com",
    projectId: "wish-list-6144b",
    storageBucket: "wish-list-6144b.appspot.com",
    messagingSenderId: "183033496938",
    appId: "1:183033496938:web:d5b37080e841aac5b89113"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;
