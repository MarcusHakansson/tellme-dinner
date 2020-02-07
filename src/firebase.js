import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDGSLgXFL1EnwCeflb6vqNZJXx11WnFaUk",
  authDomain: "dinner-app-m.firebaseapp.com",
  databaseURL: "https://dinner-app-m.firebaseio.com",
  projectId: "dinner-app-m",
  storageBucket: "dinner-app-m.appspot.com",
  messagingSenderId: "211941919342",
  appId: "1:211941919342:web:7950f255fee3cf3bfd347f"
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase;
