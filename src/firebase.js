import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAUytmA9OqhVOuOwR3jqihZKoG0X6WNiG4",
  authDomain: "ego-starbucks.firebaseapp.com",
  projectId: "ego-starbucks",
  storageBucket: "ego-starbucks.appspot.com",
  messagingSenderId: "245242047453",
  appId: "1:245242047453:web:b0db2a28d237b5f6eea434"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebaseApp.auth()
const db = firebaseApp.firestore();

export { auth, db }
