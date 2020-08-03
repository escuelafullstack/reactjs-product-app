import firebase from 'firebase/app'
import 'firebase/firestore'


var firebaseConfig = {
  apiKey: "AIzaSyAmt_SxI6kIm_EFLRsyYewptElLS6nj8xA",
  authDomain: "product-app-8f442.firebaseapp.com",
  databaseURL: "https://product-app-8f442.firebaseio.com",
  projectId: "product-app-8f442",
  storageBucket: "product-app-8f442.appspot.com",
  messagingSenderId: "892901363219",
  appId: "1:892901363219:web:044ba47aa8a55cb0ffb9e6"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

export default db