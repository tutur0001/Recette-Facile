import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD5ctm7Ioy8BgRueINBggXJtpb9pR6irDo",
  authDomain: "cuisine-recette-34183.firebaseapp.com",
  databaseURL: "https://cuisine-recette-34183-default-rtdb.europe-west1.firebasedatabase.app"
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
