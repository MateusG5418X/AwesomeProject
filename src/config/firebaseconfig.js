import firebase from "firebase"
import "firebase/storage"

var firebaseConfig = {
    apiKey: "AIzaSyBOLjryzCl-ZE9QOPGE0YtmAWPjHzX7654",
    authDomain: "estudapp-2884f.firebaseapp.com",
    projectId: "estudapp-2884f",
    storageBucket: "estudapp-2884f.appspot.com",
    messagingSenderId: "296373467665",
    appId: "1:296373467665:web:f3392dd2cb29d169fa8fb0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const database = firebase.firestore()
  export default database